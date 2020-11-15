import React, { useState, useEffect } from 'react'
import NpcCard from './npc-card/npc-card'
import NewCard from './new-card/new-card'
import axios from 'axios'
import './card-list.scss'

const defaultNPCs = []

const renderNpcCards = npcs => {
  if (!npcs || !npcs.length) return
  return npcs.map((npc, i) => <NpcCard key={i} npcData={npc} />)
}

const CardList = props => {
  const [npcs, setNpcs] = useState(defaultNPCs)

  useEffect(() => {
    axios.get('/api/npcs').then(res => {
      console.log('ay carumba', res.data)
      setNpcs(res.data)
    })
  })

  return (
    <div className="card-container">
      {renderNpcCards(npcs)}
      <NewCard />
    </div>
  )
}

export default CardList
