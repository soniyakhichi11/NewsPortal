import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

import React from 'react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Toaster, toast } from "sonner";
import { getFilePreview,uploadFile } from '@/lib/appwrite/uploadimage'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
const CreatePost = () => {
  const [file,setFile] = useState(null)
  const navigate = useNavigate()
  const [imageUploadError,setImageUploadError] = useState(null)
  const [imageUploading,setImageUploading] = useState(null)
  const [formData,setFormData] = useState({})
  const [createPostError, setCreatePostError] = useState(null)

  const handleImageUpload = async()=>{
    try {
       if(!file){
        setImageUploadError("please select an image")
          toast.error("please select image")
          return
       }

       setImageUploading(true)
       setImageUploadError(null)
       const uploadedFile = await uploadFile(file)
       const postImageUrl = getFilePreview(uploadedFile.$id)

       setFormData({...formData, image : postImageUrl})

       toast.success("Image uploaded successfully!")
       if(postImageUrl){
        setImageUploading(false)
       }

    } catch (error) {
      setImageUploadError("image upload failed")
      console.log(error)
      toast.error("Image upload failed")
      setImageUploading(false)
    }
  }
  const handleSubmit =async(e)=>{
    e.preventDefault()
    try {
      const res = await fetch("/api/post/create",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      const data = await res.json()
      if(!res.ok){
        toast.error("something went wrong. please try again")
        setCreatePostError(data.message)
        return
      }
      if(res.ok){
        toast.success("post created successfully")
        setCreatePostError(null)
        navigate(``)

      }
    } catch (error) {
      
    }
  }
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold text-slate-700'>
                    create a post
        </h1>
        <form className='flex flex-col gap-4' onSubmit = {handleSubmit}>
            <div className="flex flex-col gap-4 sm:flex-row justify-between">
                <Input 
                type="text" 
                placeholder="Title"
                 className="w-full sm:w-3/4 h-12 border-slate-400
                 focus-visible:ring-0 focus-visible:ring-offset-0"
                 required
                 id = "title"
                 onChange={(e)=>
                  setFormData({...formData,title:e.target.value})
                }
                 />

                 <Select onValueChange={(value)=>setFormData({...formData,category:value})
                }>
                 <SelectTrigger className="w-full sm:w-1/4 h-12 border-slate-400
                 focus-visible:ring-0 focus-visible:ring-offset-0">
                    <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
                 

                 <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="worldnews">World News</SelectItem>
          <SelectItem value="sportsnews">Sports News</SelectItem>
          <SelectItem value="localnews">Local News</SelectItem>
          <SelectItem value="technicalnews">Technical News</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
      </Select>
            </div>

            <div className='flex gap-4 items-center justify-between border-4 
            border-slate-600 border-dotted p-3 '>
                <Input type="file" accept ="image/*"  onChange={(e) => setFile(e.target.files[0])} />
                <Button type="button" className="bg-slate-700" onClick={handleImageUpload}>{imageUploading ? "Uploading..." : "Upload Image"}
                </Button>
            </div>

            {imageUploadError && <p className='text-red-600'>{imageUploadError}</p>}
            {formData.image &&(
              <img
              src={formData.image}
              alt="uploaded image"
              className='w-full h-72 object-cover'
              />
            )}
            <ReactQuill theme="snow" 
            placeholder='Write something here...'
            className='h-72 mb-12'
            required
            onChange={(value) => {setFormData({...formData, content: value})
          }}
            />
            <Button type = "submit" className="h-12 bg-green-600
            font-semibold max-sm:mt-5 text-md">
                Publish Your Article
            </Button>
        </form>
    </div>
  )
}

export default CreatePost
