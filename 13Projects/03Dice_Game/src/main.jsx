import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import LandingPage from './components/landingPage/LandingPage.jsx'
import GamePage from './components/gamePage/GamePage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<LandingPage />}/>
      <Route path='game' element={<GamePage />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
