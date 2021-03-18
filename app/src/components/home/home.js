import React, { useState } from 'react'
import Header from '../header/header'
import './home.scss'
import CardList from '../card-list/card-list'
import Impersonate from '../impersonate/impersonate'
import ChannelList from '../channel-list/channel-list'

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
          <div className="main-container">
            <ChannelList />
            <CardList handleNpcSelect={handleNpcSelect} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
