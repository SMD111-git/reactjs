
import { useState } from 'react'
import './App.css'
import { Themeprovider } from './Context/Theme'

function App() {
  const[themeMode,setThemeMode] = useState("light")
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }
  //actual theme change
  useEffect(() => {
    document.querySelector("html").classList.remove("light","dark")
  
    return () => {
      document.querySelector('html').classList.add(themeMode)
    }
  }, [themeMode])
  
  
  return (
    <Themeprovider value={{themeMode,lightTheme,darkTheme}}> 
<div className="flex flex-wrap min-h-screen items-center">
  <div className="w-full">
    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
      {/*theme button*/}
    </div>
      <div className="w-full max-w-sm mx-auto">
        {/**card button */}
      </div>
  </div>
</div>
</Themeprovider>
  )
}

export default App
