import React from 'react'
import './impersonate.scss'

const Impersonate = props => {
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
      <div className="right-container"></div>
    </div>
  )
}

export default Impersonate
