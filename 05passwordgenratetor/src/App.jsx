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
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-100">test</div>
    <div className='className="flex shadow rounded-lg overflow-hidden  mb-4"'><input 
    type="text"
    value={Password} 
    className="outline-none w-full py-1 px-3"
    placeholder="Password"
    readOlny
    /></div>
    </>
  )
}

export default App
