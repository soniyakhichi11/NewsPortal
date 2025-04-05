import React from 'react'
import {useSelector} from 'react-redux'
import {Input} from "../ui/input"
import {Button} from "../ui/button"
import{useState, useRef} from "react"
import { useDispatch } from 'react-redux'
import { Toaster, toast } from "sonner";
import { updateFailure,updateSuccess,updateStart, deleteUserStart, deleteUserFailure, deleteUserSuccess } from '@/redux/user/userSlice'
import { getFilePreview,uploadFile } from '@/lib/appwrite/uploadimage'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'

const DashboardProfile = () => {
   const {currentUser,error} = useSelector((state)=> state.user) 
   const profilePicRef = useRef()
   const dispatch = useDispatch()
   const [imageFile,setImageFile] = useState(null);
   const [imageFileUrl,setImageFileUrl] = useState(null);
   const[formData,setFormData] = useState({})
   console.log(formData)
   const handleImageChange =(e)=>{ 
    const file = e.target.files[0]
    if(file){
        setImageFile(file)
        setImageFileUrl(URL.createObjectURL(file))
    }
   }

   const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
   }
    
   const uploadImage = async()=>{
        if(!imageFile) return currentUser.profilePicture
        try {
            const uploadedFile = await uploadFile(imageFile)
            const profilePictureUrl = getFilePreview(uploadedFile.$id)
            return profilePictureUrl
        } catch (error) {
      toast.error("Update user failed. Please try again!")  
      console.log("Image upload failed:",error);    
        }
   }
   const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
        dispatch(updateStart())
        //wait for image upload
        const profilePicture = await uploadImage()
        const updateProfile={
            ...formData,
            profilePicture,
        }
        const res = await fetch(`/api/user/update/${currentUser._id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(updateProfile)
        })
        const data = await res.json()
    

        if(data.success === false){
            toast.error("Update user failed. Please try again")
            dispatch(updateFailure(data.message))
           
        }else{
            console.log("I am running")
            toast.success("User updated successfully")
            dispatch(updateSuccess(data))
          
                 
        }
    } catch (error) {
        toast.error("Update user failed. Please try again")
        dispatch(updateFailure(error.message))
        
    }
   } 

   const handleDeleteUser= async() =>{
    try {
        dispatch(deleteUserStart())
        const res = await fetch(`/api/user/delete/${currentUser._id}`, {
            method: "DELETE",
    })
    const data = await res.json()

    if(!res.ok){
        dispatch(deleteUserFailure(data.message))
    }
    else{
            dispatch(deleteUserSuccess())
    }
} catch (error) {
        console.log(error)
        dispatch(deleteUserFailure(error.message))
    }
   }

   const handleSignOut = async()=>{
    try {
        const res = await fetch("/api/user/signout",{
            method:"POST"
        })

        const data = await res.json()

        if

    } catch (error) {
        console.log(error)
    }
   }
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Update Your Profile</h1>
        <form className='flex flex-col gap-4 'onSubmit ={handleSubmit}>
            <input type = "file" accept="image/*"hidden ref={profilePicRef} onChange={handleImageChange}/>
            <div className="w-32 h-32 self-center cursor-pointer  overflow-hidden">
                <img src={imageFileUrl || currentUser.profilePicture} alt=""
                className='rounded-full w-full h-full object-cover border-8 border-gray-300 '
                onClick={()=>profilePicRef.current.click()}/>
            </div>
             <Input type ="text" id = "username" placeholder="username"
             defaultValue={currentUser.username}
             className="h-12 border border-slate-400 focus-visible :ring-0 focus-visible:ring-offset-0"
             onChange={handleChange}/>

             <Input type ="email" id = "email" placeholder="email"
             defaultValue={currentUser.email}
             className="h-12 border border-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
             onChange={handleChange}/>

              <Input type ="password" id = "password" placeholder="password"
             
             className="h-12 border border-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
             onChange={handleChange}/>

            <Button type ="submit" className="h-12 bg-green-600 ">Update Profile</Button>
        </form>
            <div className='text-red-500 flex justify-between mt-5 '>
            <AlertDialog>
            <AlertDialogTrigger asChild>
            <Button variant ="ghost"className='cursor-pointer'>Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction classname="bg-red-600" onClick={handleDeleteUser} >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>

            </AlertDialog>
               
            <Button variant ="ghost"className='cursor-pointer' onClick ={handleSignOut}>Sign Out</Button>
            </div>
            <p className='text-red-600'>{error}</p>
        
    </div>
  )
}

export default DashboardProfile