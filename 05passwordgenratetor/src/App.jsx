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
    let str="ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuwxyz"
    if(Numberallowed) str+="0123456789"
    if(CharAllowed)str+="~!@#$%^&*{}()?<>?/"
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      let char=Math.floor(Math.random()*str.length+1)
      pass=str.charAt(char)
      
    }
    setPassword(pass)
    },[Lenght,CharAllowed,Numberallowed,setPassword])

  return (
    <>
      <h1 className="text-4xl text-white text-center"></h1>
    </>
  )
}

export default App
