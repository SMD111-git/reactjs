import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {
    const navigate =useNavigate()
    const [loading,setloading]=useState(true)
    const authStatus =useSelector(state =>state.authStatus)
    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }
        elseif(!authentication && authStatus!==authentication){
            
        }
    },[authStatus,navigate,authentication])
  return (
    <div>AuthLayout</div>
  )
}
