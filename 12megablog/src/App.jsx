
import {useDispatch} from 'react-redux' 
import { useState,useEffect } from 'react'
import './App.css'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice' 
function App() {
  '''console.log(import.meta.env.VITE_APPWRITE_URL); //this method to access the varaible or other cerditional from .env  file'''
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
  }, [ ])
  
  

  return !loading ?(
    <div className='min'></div>
  ): (null)
}

export default App
