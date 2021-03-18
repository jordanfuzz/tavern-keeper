import React, { useState, useEffect } from 'react'
import './channel-list.scss'
import axios from 'axios'

const ChannelList = () => {
  const [channels, setChannels] = useState(null)

  useEffect(() => {
    axios.get('/api/channels').then(res => setChannels(res.data))
  }, [])

  const renderChannels = () => {
    if (!channels) return null

    const categories = Object.keys(channels)
    return categories.map((category, i) => {
      return (
        <div key={i}>
          <label className="channel-header">{category}</label>
          {channels[category].map((channel, j) => {
            return (
              <span className="channel" key={`channel-${j}`}>
                #{channel.name}
              </span>
            )
          })}
        </div>
      )
    })
  }

  // This should not have a static height, but should have a minimum height, or an empty state
  return <div className="channel-container">{renderChannels()}</div>
}

export default ChannelList
