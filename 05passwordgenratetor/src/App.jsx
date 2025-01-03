import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [lenght,setLength]=useState(8)
  const [NumAllowed,setNumAllowed] =useState(false)
  const [Charallowed,setCharAllowed] = useState(false)
  const [Password,setPassword] =useState("")
  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz"
    if(NumAllowed)
  },[lenght,NumAllowed,charAllowed])

  return (
    <>
      <h1 className="text-4xl text-center text-white">passwordgenrator</h1>
    </>
  )
}

export default App
