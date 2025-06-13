import React from 'react'
import { Container,PostFrom } from '../compontent'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AppwriteService from 'appwrite'
function EditPost() {
    const [post,setPosts] =useState(null)
    const{slug}=useParams() //?ehat is this
    const navigate =useNavigate()
    useEffect(()=>{
        if(slug){
            AppwriteService.getpost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
                
            })    
        }
        else{
            navigate('/')
        }
    },[slug,navigate])


   return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost