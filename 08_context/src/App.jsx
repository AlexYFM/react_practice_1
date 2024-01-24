import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    // wrapping everything in the provider gives all components access to the usercontext (user, setUser)
    // don't need to provide layers of props 
    <UserContextProvider>
      <h1>React example</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
