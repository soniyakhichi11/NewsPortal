import React from 'react'
import {useSelector} from 'react-redux'
import {Input} from "../ui/input"
const DashboardProfile = () => {
   const {currentUser} = useSelector((state)=> state.user) 
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Update Your Profile</h1>
        <form className='flex flex-col gap-4'>
            <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden">
                <img src={currentUser.profilePicture} alt=""
                className='rounded-full w-full h-full object-cover border-8 border-gray-300 '/>
            </div>
             <Input type ="text" id = "username" placeholder="username"
             defaultValue={currentUser.username}
             className="h-12 border border-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"/>

             <Input type ="email" id = "email" placeholder="username"
             defaultValue={currentUser.username}
             className="h-12 border border-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"/>
        </form>
    </div>
  )
}

export default DashboardProfile