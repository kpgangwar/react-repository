import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './mini1/App'
// import App from './App.jsx'
// import App from './blogMiniProject/App'
import App from './useReducer/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
