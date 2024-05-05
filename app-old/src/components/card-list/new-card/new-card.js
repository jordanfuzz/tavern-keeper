import React from 'react'
import { Link } from 'react-router-dom'
import './new-card.scss'

const NewCard = props => {
  return (
    <Link to="/create-npc">
      <span className="new-npc-card">
        <div className="new-image-placeholder" />
        <span className="new-npc-name">+</span>
      </span>
    </Link>
  )
}

export default NewCard
