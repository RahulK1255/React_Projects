import React from 'react'
import {NavLink} from 'react-router-dom'
import './LandingPageStyle.css'

function LandingPage() {
  return (
    <div className='container'>
        <img src="src\assets\dices 1.png" alt="Dice image" />
        <div className='text_container'>
        <h1>Dice Game
        <NavLink 
        to = "/game">
        <button>Play Now</button>
        </NavLink>
        </h1>
        
        </div>
    </div>
  )
}

export default LandingPage