
import {useDispatch} from 'react-redux' 
import { useState,useEffect } from 'react'
import './App.css'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice' 
import { Footer,Header } from './compontent'
import { Outlet } from 'react-router-dom'
function App() {
  //console.log(import.meta.env.VITE_APPWRITE_URL); //this method to access the varaible or other cerditional from .env  file
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading (false))
  }, [])
  
  

  return !loading ?(
    <div className='min-h-screen flex- flex-warp content-between bg-gary-400'>
      <div className='w-full block'>
        <Headers/>
        <main>
          TODO:{/*<Outlet/>*/}
        </main>
        <Footer/>
      </div>
    </div>
  ): (null)
}

export default App
