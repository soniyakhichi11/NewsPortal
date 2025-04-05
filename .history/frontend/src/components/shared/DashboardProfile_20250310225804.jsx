import React from 'react'

const DashboardProfile = () => {
   const {currentUser} = useSelector((state)=> state.user) 
  return (
    <div className='max-w-lg '>DashboardProfile</div>
  )
}

export default DashboardProfile