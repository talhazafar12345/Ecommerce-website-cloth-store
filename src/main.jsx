import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero30 from './Sections/Hero30.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>

  <Hero30>
    <App />
  </Hero30>
  </StrictMode>,
)
