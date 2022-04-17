import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Button from './pages/button'
import Dialog from './pages/dialog'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dialog" element={<Dialog />} />
      <Route path="button" element={<Button />} />
    </Routes>
  )
}

export default App
