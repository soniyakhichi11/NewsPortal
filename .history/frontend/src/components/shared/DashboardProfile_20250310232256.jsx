import React from 'react'
import {useSelector} from 'react-redux'
import {}
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
             <Input></Input>
        </form>
    </div>
  )
}

export default DashboardProfile