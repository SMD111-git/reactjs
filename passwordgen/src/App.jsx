import { useState ,useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length ,setLenght] = useState(8)
  const [numberallowed,setnumberallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)
  const [password,setpassword]=useState("")
  const passwordGen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNQPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+="0123456789"
    if(charallowed) str+="~!@#$%^&*(){}|":<>?</>"
    
  },[length,numberallowed,charallowed,setpassword])

  }

  return (
    <>
      <h1 className='text-4xl text-center text-white'>password generator </h1>
    </>
  )
}

export default App
