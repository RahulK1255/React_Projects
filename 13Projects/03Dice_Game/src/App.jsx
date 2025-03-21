import React from 'react'
import './App.css'
import LandingPage from './components/landingPage/LandingPage'
import GamePage from './components/gamePage/GamePage.jsx'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
