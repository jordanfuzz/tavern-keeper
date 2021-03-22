import React, { useState } from 'react'
import './login.scss'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  const handlePasswordChange = value => {
    setPassword(value)
  }

  const handleUsernameChange = value => {
    setUsername(value)
  }

  const handleLogin = () => {
    if (username && password)
      axios
        .post('/api/login', { password, username })
        .then(res => setMessage(res.data.message))
  }

  return (
    <div className="background">
      <div className="form-container">
        <label>Username</label>
        <input
          type="text"
          onChange={e => handleUsernameChange(e.target.value)}
          value={username}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={e => handlePasswordChange(e.target.value)}
          value={password}
        />
        <button onClick={handleLogin}>Login</button>
        {message ? <span className="login-message">{message}</span> : null}
      </div>
    </div>
  )
}

export default Login
