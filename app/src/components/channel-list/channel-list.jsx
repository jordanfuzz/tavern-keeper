import React, { useState, useEffect } from 'react'
import './channel-list.css'
import axios from 'axios'

const ChannelList = props => {
  const [channels, setChannels] = useState(null)

  useEffect(() => {
    axios.get('/api/channels').then(res => {
      setChannels(res.data)

      const activeChannelString = findActiveChannelFromCategories(res.data)
      props.setActiveChannel(activeChannelString)
    })
  }, [])

  const findActiveChannelFromCategories = categories => {
    let activeChannel

    for (const category in categories) {
      activeChannel = categories[category].find(channel => channel.hasWebhook)
      if (activeChannel) return `${category}: #${activeChannel.name}`
    }
  }

  const setWebhook = (category, channel) => {
    axios
      .patch('/api/channels/webhook', { channelId: channel.id })
      .then(res => {
        props.setActiveChannel(`${category}: #${channel.name}`)
        setChannels(res.data)
      })
  }

  const renderChannels = () => {
    if (!channels) return null

    const categories = Object.keys(channels)
    return categories.map((category, i) => {
      return (
        <div key={i}>
          <label className="channel-header">{category}</label>
          {channels[category].map((channel, j) => {
            const webhookClass = channel.hasWebhook ? 'webhook' : ''

            return (
              <span
                className={`channel ${webhookClass}`}
                key={`channel-${j}`}
                onClick={() => setWebhook(category, channel)}
              >
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
