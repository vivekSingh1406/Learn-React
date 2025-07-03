import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateHook from './StateHook.jsx'
import EffectHook from './EffectHook.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <StateHook /> */}
    <EffectHook />
  </StrictMode>,
)
