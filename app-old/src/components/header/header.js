import React from 'react'
import './header.scss'
import mug from '../../../media/mug.png'

const Header = props => {
  return (
    <div className="header-container">
      <img src={mug} className="header-image" />
      <h1 className="header-text">Tavern Keeper</h1>
    </div>
  )
}

export default Header
