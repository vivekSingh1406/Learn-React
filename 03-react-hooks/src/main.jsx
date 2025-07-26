import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateHook from './StateHook.jsx'
import EffectHook from './EffectHook.jsx'
import UseMemoVsWithout from './UseMemoVsWithout.jsx'
import LifecycleExample from './LifecycleExample.jsx'
import PostList from './PostList.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <StateHook /> */}
    {/* <EffectHook /> */}
    {/* <UseMemoVsWithout /> */}
    {/* < LifecycleExample /> */}
    <PostList />
  </StrictMode>,
)
