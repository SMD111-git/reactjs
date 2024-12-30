import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter=15;
  const addvalue=() =>{
     console.log("value added",counter);
     counter=counter+1
    
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter:{counter}</h2>
     
     <button onClick={addvalue}>
      add value</button> 
     <br/>     
     <button>subtrace value</button>
    </>
  )
}

export default App
