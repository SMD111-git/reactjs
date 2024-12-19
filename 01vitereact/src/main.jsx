import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import chai from './chai.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <chai/>
  </StrictMode>,
)
