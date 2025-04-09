import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


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
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500"> 
    <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
      type='text'
      value={Password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
      <input type="range"
       min={6}
       max={100}
       value={length}
       className='cursor-pointer'
       onChange={(e) => {setLenght(e.target.value)}}
       />
       <label >Length:{length}</label>
       </div>
      </div>
    </div>

    </>
  )
}

export default App
  