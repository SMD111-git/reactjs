import React from 'react'
import { useEffect,useState } from 'react'
import appwriteSrevice from '../appwrite/conf'
import { Container,Postcard } from '../compontent'

function Home() {
    const [posts,setPosts] =useState()
    useEffect(()=>{
        appwriteSrevice.getposts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])
  return(
    <div>Home</div>
  )
}

export default Home