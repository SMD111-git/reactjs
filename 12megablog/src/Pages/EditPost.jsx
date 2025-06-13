import React from 'react'
import { Container,PostFrom } from '../compontent'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AppwriteService from 'appwrite'
function EditPost() {
    const [posts,setPosts] =useState(null)
    const{slug}=useParams() //?ehat is this
    const navigate =useNavigate()
    useEffect(()=>{
        if(slug){
            AppwriteService.getpost(slug).then((posts)=>{
                if(posts){
                    setPosts(posts)
                }
                else{
                    navigate('/')
                }
            })

        }
    })


  return (
    <div>EditPost</div>
  )
}

export default EditPost