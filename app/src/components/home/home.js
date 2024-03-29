import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useUser } from '../../context/user-context'
import Header from '../header/header'
import './home.scss'
import CardList from '../card-list/card-list'
import Impersonate from '../impersonate/impersonate'
import ChannelList from '../channel-list/channel-list'

const Home = () => {
  const [selectedNpc, setSelectedNpc] = useState(null)
  const [activeChannel, setActiveChannel] = useState(null)
  const { userId } = useUser()

  const handleNpcSelect = npcData => {
    setSelectedNpc(npcData)
  }

  const handleClose = () => {
    setSelectedNpc(null)
  }

  return (
    <div className="background">
      {!userId ? <Redirect to="/login" /> : null}
      {selectedNpc ? (
        <Impersonate
          activeChannel={activeChannel}
          npcData={selectedNpc}
          handleClose={handleClose}
        />
      ) : (
        <div>
          <Header />
          <div className="main-container">
            <ChannelList setActiveChannel={setActiveChannel} />
            <CardList handleNpcSelect={handleNpcSelect} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
