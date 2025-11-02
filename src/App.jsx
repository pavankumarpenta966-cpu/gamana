import './app.css'
import { Routes, Route } from 'react-router-dom'
import { HeroUIProvider } from '@heroui/react'
import HomePage from './sections/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import VisionPage from './pages/VisionPage'
import ContactUsPage from './pages/ContactUsPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <HeroUIProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/contact" element={<ContactUsPage />} />

      </Routes>
    </HeroUIProvider>
  )
}

export default App
