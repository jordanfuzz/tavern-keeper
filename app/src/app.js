import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/home'
import CreateNpc from './components/create-npc/create-npc'
import Login from './components/login/login'
import './app.scss'

const App = () => {
  return (
    <div className="background">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/create-npc" component={CreateNpc} />
      </Switch>
    </div>
  )
}

export default App
