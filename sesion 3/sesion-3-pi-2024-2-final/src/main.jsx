import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import World from './World'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <World />
  </StrictMode>,
)
