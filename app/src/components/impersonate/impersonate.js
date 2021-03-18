import React, { useState } from 'react'
import './impersonate.scss'

const Impersonate = props => {
  const [messageText, setMessageText] = useState('')
  const { name, avatarUrl } = props.npcData

  return (
    <div className="impersonate-container">
      <div className="left-container">
        <button className="back-button" onClick={props.handleClose}>
          Back
        </button>
        <img src={avatarUrl} className="avatar-image" />
        <span className="npc-name">{name}</span>
      </div>
      <div className="right-container">
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
      </div>
    </div>
  )
}

export default Impersonate
