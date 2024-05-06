import Home from './components/home/home'
import { Routes, Route } from 'react-router-dom'
import './app.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
