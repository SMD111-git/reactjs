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
    if(charallowed) str+="~!@#$%^&*()<>?{}"
    for(let i=1;i<=array.lenght;i++)
    {
      let char=Math.floor(Math.random()*str.lenght+1)
    }
    setpassword(pass)
    
  },[length,numberallowed,charallowed,setpassword]) 

  }

 return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-600'>test</div>
    </>
  )
}

export default App
