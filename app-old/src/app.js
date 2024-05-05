import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import CreateNpc from './components/create-npc/create-npc'
import Login from './components/login/login'
import './app.scss'

const App = () => {
  return (
    <div className="background">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-npc" element={<CreateNpc />} />
      </Routes>
    </div>
  )
}

export default App
