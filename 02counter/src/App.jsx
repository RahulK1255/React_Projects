import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15)

  // let counter = 15
 
  const addValue = () => {
    // if(counter>=20){
    //   return ;
    // }
    // counter = counter + 1

    // this changes nothing it add only one
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // this add 4 in counter 
    // it is due to usestate 
    // setCounter( () => {} )  
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    // if(counter <=0)
    // return;
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </> 
  )
}

export default App
