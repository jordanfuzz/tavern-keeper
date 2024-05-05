import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.scss'
import { useUser } from '../../context/user-context'
import axios from 'axios'
import mug from '../../../media/mug.png'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const { userId, setUserId } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/api/user').then(res => setUserId(res.data?.id))
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
      <div className="form-container">
        <img src={mug} className="header-image-small" />
        <h1 className="header-text-small">Tavern Keeper</h1>
        <div className="single-input-container">
          <label className="form-label">Username:</label>
          <input
            className="text-input"
            type="text"
            onChange={e => handleUsernameChange(e.target.value)}
            value={username}
          />
        </div>
        <div className="single-input-container">
          <label className="form-label">Password: </label>
          <input
            className="text-input"
            type="password"
            onChange={e => handlePasswordChange(e.target.value)}
            value={password}
          />
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        {message ? <span className="login-message">{message}</span> : null}
      </div>
    </div>
  )
}

export default Login
