import React from 'react'
import Header from '../header/header'
import CardList from '../card-list/card-list'
import './home.scss'

const Home = () => {
  return (
    <div className="background">
      <Header />
      <CardList />
    </div>
  )
}

export default Home
