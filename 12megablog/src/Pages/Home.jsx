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
    if (posts.lenght===0){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
     return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
  
}

export default Home