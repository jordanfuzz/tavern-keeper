import React from 'react'
import Header from './components/header/header'
import CardList from './components/card-list/card-list'
import './app.scss'

const App = () => {
  return (
    <div className="background">
      <Header />
      <CardList />
    </div>
  )
}

export default App
