import Home from './components/home/home'
import Login from './components/login/login'
import { Routes, Route } from 'react-router-dom'
import './app.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
