import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './compontent/AddTodo'
import Todos from './compontent/Todos'

function App() {
  

  return (
    <>
      <h1>reduxtoolkit</h1>
      <AddTodo/>
      <Todos.jsx/>
    </>
  )
}

export default App
