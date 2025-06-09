import { useState } from "react"
import React from 'react'
import authService from "../appwrite/auth"
import { Link, useNavigate } from "react-router-dom"
import {login} from "..store/authService"
import {Button,Input, Logo}  from './index.js'
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
function Singup() {
  const navigate = useNavigate()
  const [error,setError] =useState("")
  const dispatch =useDispatch()
  const {register,handelSubmit}= useForm()
   const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

}

export default Singup