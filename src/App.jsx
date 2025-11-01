import './app.css'
import { Routes, Route } from 'react-router-dom'
import { HeroUIProvider } from '@heroui/react'
import HomePage from './sections/HomePage'
function App() {
  return (
    <HeroUIProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HeroUIProvider>
  )
}

export default App
