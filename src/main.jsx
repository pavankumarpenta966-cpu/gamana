import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './pages/ErrorBoundary.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
    <BrowserRouter basename="/gamana">
      <App />
    </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
