import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { UserProvider } from './context/user-context.jsx'
import App from './app.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>,
)
