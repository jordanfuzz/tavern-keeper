import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/user-context.jsx'
import axios from 'axios'
import mug from '../../media/mug.png'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const { userId, setUserId } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/api/user').then(res => setUserId(res.data?.id))
    // axios.get('/api/create-user')
  }, [])

  const handlePasswordChange = value => {
    setPassword(value)
  }

  const handleUsernameChange = value => {
    setUsername(value)
  }

  const handleLogin = () => {
    if (username && password)
      axios.post('/api/login', { password, username }).then(res => {
        if (res.data.userId) setUserId(res.data.id)
        else setMessage(res.data.message)
      })
  }

  if (userId) navigate('/')

  return (
    <div className="background">
      <div
        className="w-[400px] h-[250px] bg-bg-dark border-standard border-solid border-highlight
        p-[20px] p-x-[40px] box-content block m-auto mt-[50px]">
        <img src={mug} className="h-img-small w-img-small ml-[20px] rounded-full inline-block align-middle" />
        <h1 className="inline-block ml-[20px] align-middle text-3xl">Tavern Keeper</h1>
        <div className="mt-[25px]">
          <label>Username:</label>
          <input
            className="h=[25px] ml-[20px] align-top pl-[5px]"
            type="text"
            onChange={e => handleUsernameChange(e.target.value)}
            value={username}
          />
        </div>
        <div className="mt-[25px]">
          <label>Password:</label>
          <input
            className="h=[25px] ml-[20px] align-top pl-[5px]"
            type="password"
            onChange={e => handlePasswordChange(e.target.value)}
            value={password}
          />
        </div>
        <button className="mt-[25px] rounded-none p-2 px-4 text-base cursor-pointer hover:text-highlight" onClick={handleLogin}>
          Login
        </button>
        {message ? <span className="login-message">{message}</span> : null}
      </div>
    </div>
  )
}

export default Login
