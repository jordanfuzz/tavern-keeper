import React from 'react'
import './npc-card.scss'

const NpcCard = props => {
  return (
    <div className="npc-card" onClick={props.onClick}>
      <img src={props.npcData.avatarUrl} className="image-placeholder" />
      <span className="npc-name">{props.npcData.name}</span>
    </div>
  )
}

export default NpcCard
