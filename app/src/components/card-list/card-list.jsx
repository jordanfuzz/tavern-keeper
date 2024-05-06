import React, { useState, useEffect } from 'react'
import NpcCard from './npc-card/npc-card.jsx'
import NewCard from './new-card/new-card.jsx'
import axios from 'axios'
import './card-list.css'

const defaultNPCs = []

const CardList = props => {
  const [npcs, setNpcs] = useState(defaultNPCs)

  const renderNpcCards = npcs => {
    if (npcs && npcs.length) {
      return npcs.map((npc, i) => (
        <NpcCard
          key={i}
          npcData={npc}
          onClick={() => props.handleNpcSelect(npc)}
        />
      ))
    }
  }

  useEffect(() => {
    axios.get('/api/npcs').then(res => {
      setNpcs(res.data)
    })
  }, [])

  return (
    <div className="card-container">
      {renderNpcCards(npcs)}
      <NewCard />
    </div>
  )
}

export default CardList
