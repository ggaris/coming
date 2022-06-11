import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Button from './pages/button'
import Dialog from './pages/dialog'
import Home from './pages/home'
import Input from './pages/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dialog" element={<Dialog />} />
      <Route path="button" element={<Button />} />
      <Route path="input" element={<Input />} />
    </Routes>
  )
}

export default App
