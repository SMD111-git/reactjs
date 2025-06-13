import React  from 'react'
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import {Button,Input,Select,RTE} from '../index'
import appwriteService from '../../appwrite/conf'
import { data, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
function PostForm({post}) {
    const {register,handleSubmit,watch,setValue,control,getValues }=useForm({
        defaultValues:{
            title:post?.title||'',
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active", 
        },
    }) //this functionaly give varies function to handel  
    const navigate =useNavigate()
    const userData =useSelector(state=>state.user.userData)
    const submit = async(data)=>{
      if(post){
       const file= data.image[0]? appwriteService.uploadfile(data.image[0]):null
       if(file){
        appwriteService.deleteFile(post.featuredImage)

       }
       const dbPost= await appwriteService.updatePost(post.$id,{
        ...data,
        featuredImage:file ? file.$id :undefined
        })
        if(dbPost){
          navigate(`/post/${dbPost.$id}`)
        }
       }
        else{
          const file =await appwriteService.uploadfile(data.image[0]);
          if (file) {
            const fileTd=file.$id
            data.featuredImage=fileId
            const dbPost=await appwriteService.createpost({
              ...data,
              userId:userData.$id,

            })
            if(dbPost){
              navigate('/post/${dbPost.id}')
            }
          }
        }
    };
      const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);
    React.useEffect(()=>{
      
    },[watch,slugTransform,setValue])
  return (
    <div>Postform</div>
  )
}

export default Postform