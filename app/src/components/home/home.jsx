import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/user-context.jsx'
import Header from '../header/header.jsx'
import './home.css'
import CardList from '../card-list/card-list.jsx'
import Impersonate from '../impersonate/impersonate.jsx'
import ChannelList from '../channel-list/channel-list.jsx'

const Home = () => {
  const [selectedNpc, setSelectedNpc] = useState(null)
  const [activeChannel, setActiveChannel] = useState(null)
  const { userId } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (!userId) navigate('/login')
  }, [userId])

  const handleNpcSelect = npcData => {
    setSelectedNpc(npcData)
  }

  const handleClose = () => {
    setSelectedNpc(null)
  }

  return (
    <div className="background">
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
