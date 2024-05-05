import React, { useState, useRef, useEffect, useCallback } from 'react'
import ReactCrop from 'react-image-crop'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/user-context'
// import 'react-image-crop/lib/ReactCrop.scss'
import './create-npc.scss'
import axios from 'axios'

const defaultNpcData = {
  name: '',
  avatarUrl: '',
}

const defaultImageData = {
  image: null,
  file: null,
}

const defaultCrop = {
  unit: '%',
  width: '30',
  aspect: 1,
}

const pixelRatio = window.devicePixelRatio || 1

const CreateNpc = () => {
  const [npcData, setNpcData] = useState(defaultNpcData)
  const [imageData, setImageData] = useState(defaultImageData)
  const [crop, setCrop] = useState(defaultCrop)
  const [completedCrop, setCompletedCrop] = useState(null)
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const navigate = useNavigate()
  const imageRef = useRef(null)
  const previewCanvasRef = useRef(null)
  const { userId } = useUser()

  const handleNpcNameChange = value => {
    setNpcData(Object.assign({}, npcData, { name: value }))
  }

  const handleSaveNpc = () => {
    if (!npcData.name || !npcData.avatarUrl) return

    axios.post('/api/npc', npcData).then(res => {
      if (res.status === 200) setShouldRedirect(true)
    })
  }

  const handleImageUpload = event => {
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.onloadend = () => {
      const image = reader.result
      setImageData(
        Object.assign({}, imageData, {
          image,
          file,
        })
      )
    }
    reader.readAsDataURL(file)
  }

  const getResizedCanvas = (canvas, newWidth, newHeight) => {
    const tempCanvas = document.createElement('canvas')
    tempCanvas.width = newWidth
    tempCanvas.height = newHeight

    const ctx = tempCanvas.getContext('2d')
    ctx.drawImage(
      canvas,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      newWidth,
      newHeight
    )

    return tempCanvas
  }

  const saveCrop = (previewCanvas, crop) => {
    if (!crop || !previewCanvas) {
      return
    }

    const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height)
    canvas.toBlob(
      blob => {
        axios
          .post('/api/images', blob, {
            headers: { 'content-type': 'image/png' },
          })
          .then(res => {
            setNpcData(
              Object.assign({}, npcData, {
                avatarUrl: res.data,
              })
            )
          })
      },
      'image/png',
      1
    )
  }

  const onLoad = useCallback(image => {
    imageRef.current = image
  }, [])

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imageRef.current) {
      return
    }

    const image = imageRef.current
    const canvas = previewCanvasRef.current
    const crop = completedCrop

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    const ctx = canvas.getContext('2d')

    canvas.width = crop.width * pixelRatio
    canvas.height = crop.height * pixelRatio

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    ctx.imageSmoothingQuality = 'high'

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    )
  }, [completedCrop])

  if (shouldRedirect) {
    navigate('/')
    return null
  }

  if (!userId) {
    navigate('/login')
    return null
  }

  return (
    <div className="create-npc-container">
      <div className="left-container">
        {npcData.avatarUrl ? (
          <img src={npcData.avatarUrl} className="upload-image" />
        ) : (
          <div className="upload-image-placeholder" />
        )}
        <input
          className="image-upload-input"
          type="file"
          accept="image/*"
          onChange={e => handleImageUpload(e)}
        />
        <input
          type="text"
          value={npcData.name}
          onChange={e => handleNpcNameChange(e.target.value)}
          className="npc-name-input"
        />
        <button onClick={() => handleSaveNpc()}>Finish</button>
      </div>
      <div className="crop-window">
        <ReactCrop
          src={imageData.image}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={e => setCrop(e)}
          onComplete={e => setCompletedCrop(e)}
        />
        <div>
          <canvas
            className="preview-canvas"
            ref={previewCanvasRef}
            style={{
              width: Math.round(completedCrop?.width ?? 0),
              height: Math.round(completedCrop?.height ?? 0),
            }}
          />
        </div>
        <button
          onClick={() => saveCrop(previewCanvasRef.current, completedCrop)}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateNpc
