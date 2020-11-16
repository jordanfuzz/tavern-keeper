import React, { useState } from 'react'
import Header from '../header/header'
import CardList from '../card-list/card-list'
import './home.scss'
import Impersonate from '../impersonate/impersonate'

const Home = () => {
  const [selectedNpc, setSelectedNpc] = useState(null)

  const handleNpcSelect = npcData => {
    setSelectedNpc(npcData)
  }

  const handleClose = () => {
    setSelectedNpc(null)
  }

  return (
    <div className="background">
      {selectedNpc ? (
        <Impersonate npcData={selectedNpc} handleClose={handleClose} />
      ) : (
        <div>
          <Header />
          <CardList handleNpcSelect={handleNpcSelect} />
        </div>
      )}
    </div>
  )
}

export default Home
