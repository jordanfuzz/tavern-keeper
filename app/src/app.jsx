import Home from './components/home/home'
import Login from './components/login/login'
import CreateNpc from './components/create-npc/create-npc'
import { Routes, Route } from 'react-router-dom'
import './app.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-npc" element={<CreateNpc />} />
    </Routes>
  )
}

export default App
