import React from 'react'

const DashboardProfile = () => {
   const {currentUser} = useSelector((state)=> state.user) 
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold'>Update Your Profile</h1>
    </div>
  )
}

export default DashboardProfile