import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from "@vercel/analytics/react"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <App />
      <Analytics />
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
