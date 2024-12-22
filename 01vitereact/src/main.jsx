import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Chai from './chai.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Chai/>
  </StrictMode>,
)
/**now we see that structure is <chai/><app/> it much simmilar to fun call */