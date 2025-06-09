import { useState } from "react"
import React from 'react'
import authService from "../appwrite/auth"
import { Link } from "react-router-dom"
import {login} from "..store/authService"
import {Button,Input, Logo}  from './index'
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
function Singup() {
  return (
    <div>Singup</div>
  )
}

export default Singup