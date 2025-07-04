import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PropDrilling from './components/PropDrilling.jsx'
import ConextProvider from './context/ContextAPI.jsx'
import Profile from './components/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <PropDrilling /> */}
    <ConextProvider>
      <Profile />
    </ConextProvider>
  </StrictMode>,
)
