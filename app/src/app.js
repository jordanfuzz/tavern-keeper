import React from 'react'
import axios from 'axios'
import './app.scss'

const App = () => {
  const handleButtonClick = () => {
    axios.get('/api').then(res => {
      console.log('Server says: ', res.data)
    })
  }
  return (
    <div>
      <p>Hello world!</p>
      <button onClick={() => handleButtonClick()}>Press me!</button>
    </div>
  )
}

export default App
