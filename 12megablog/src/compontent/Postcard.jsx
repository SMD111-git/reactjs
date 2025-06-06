import React from 'react'
import appwriteService from '../appwrite/conf'
import {Link} from'react-router-dom'

function Postcard({$id,title,featuredimage}) {
  return (
    <link to={`/post/{$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                  <img src={appwriteService.getFilePreview(featuredimage)} alt={title}
                className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </link>
  )
}

export default Postcard