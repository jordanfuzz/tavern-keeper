import React, { useState, useEffect } from 'react'
import NpcCard from './npc-card/npc-card'
import NewCard from './new-card/new-card'
import axios from 'axios'
import './card-list.scss'

const defaultNPCs = []

const renderNpcCards = npcs => {
  console.log(npcs)
  if (npcs && npcs.length) {
    return npcs.map((npc, i) => <NpcCard key={i} npcData={npc} />)
  }
}

const CardList = props => {
  const [npcs, setNpcs] = useState(defaultNPCs)

  useEffect(() => {
    axios.get('/api/npcs').then(res => {
      console.log('huh? ', res)
      console.log('ay carumba', res.data)
      setNpcs(res.data)
    })

    console.log('also trying this:')
    axios.get('http://api/npcs').then(res => {
      console.log("here's something maybe?", res)
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
