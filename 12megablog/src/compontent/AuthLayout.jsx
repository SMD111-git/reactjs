import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {
    const navigate =useNavigate()
    const [loading,setloading]=useState(true)
    const authStatus =useSelector(state =>state.authStatus)
    useEffect(()=>{
      
      //this used to check the user is logined or not then redirect to the login session
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authentication])
  return (
     loader ? <h1>Loading...</h1> : <>{children}</>
  )
}
