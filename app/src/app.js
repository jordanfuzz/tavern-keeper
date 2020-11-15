import React from 'react'
import NpcCard from './components/npc-card/npc-card'
import Header from './components/header/header'
import './app.scss'

const App = () => {
  return (
    <div className="background">
      <Header />
      <div className="card-container">
        <NpcCard />
        <NpcCard />
        <NpcCard />
        <NpcCard />
        <NpcCard />
        <NpcCard />
        <NpcCard />
      </div>
    </div>
  )
}

export default App
