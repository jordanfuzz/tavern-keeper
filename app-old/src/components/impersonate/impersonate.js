import React, { useState } from 'react'
import './impersonate.scss'
import axios from 'axios'

const Impersonate = props => {
  const [messageText, setMessageText] = useState('')
  const { name, avatarUrl } = props.npcData

  const sendMessage = () => {
    axios
      .post('/api/channels/send-message', {
        message: messageText,
        name,
        avatarUrl,
      })
      .then(res => console.log(res.data))
  }

  return (
    <div className="impersonate-container">
      <div className="left-container">
        <button className="back-button" onClick={props.handleClose}>
          Back
        </button>
        <img src={avatarUrl} className="avatar-image" />
        <span className="impersonate-npc-name">{name}</span>
      </div>
      <div className="right-container">
        <span className="posting-to">Posting to:</span>
        <span className="active-channel-name">{props.activeChannel}</span>
        <div className="message-container">
          <label className="message-label" htmlFor="npc-message">
            Message:
          </label>
          <textarea
            id="npc-message"
            className="npc-message"
            value={messageText}
            onChange={e => setMessageText(e.target.value)}
          />
        </div>
        <button onClick={sendMessage}>Send Message!</button>
      </div>
    </div>
  )
}

export default Impersonate
