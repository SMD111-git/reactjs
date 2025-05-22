import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/conf'
import  {logout} from '../../store/authSlice'


function LogoutBtn() {
    const dispatch = useDispatch()
    const LogoutHandler =()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
        }
    }
  return (
    <button className=''>logout</button>
  )
}

export default LogoutBtn