import { useCallback } from "react"
import React  from 'react'
import { useForm } from "react-hook-form"
import {Button,Input,Select,RTE} from '../index'
import appwriteService from '../../appwrite/conf'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
function Postform() {
    const {register,handleSubmit,watch,setValue,getValues }=useForm({
        defaultValues:{
            title:''
        },
    }) //this functionaly give varies function to handel  
  return (
    <div>Postform</div>
  )
}

export default Postform