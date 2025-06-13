import React from 'react'
import { useState,useEffect} from 'react'
import AppwriteService  from '../appwrite/conf'
import { Container,Postcard } from '../compontent'

function AllPost() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{},[])
    AppwriteService.getPosts([]).then((posts)=>{
        if (posts) {
            setPosts(posts.documents)
        }
    })

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Postcard post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost