import React from 'react'
import {useSelector} from 'react-redux'
const DashboardProfile = () => {
   const {currentUser} = useSelector((state)=> state.user) 
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Update Your Profile</h1>
        <form></form>
    </div>
  )
}

export default DashboardProfile