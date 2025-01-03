import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Lenght, setLenght] = useState(8)
  const[CharAllowed,setCharallowed]=useState(false)
  const[Numberallowed,setNumberallowed]=useState(false)
  const[Password,setPassword]=useState("")
  const passwordGenratetor=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHI"
    if(Numberallowed) str+="012"
    },[Lenght,CharAllowed,Numberallowed])

  return (
    <>
      <h1 className="text-4xl text-white text-center"></h1>
    </>
  )
}

export default App
