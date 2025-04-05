import React from 'react'

const DashboardProfile = () => {
   const {currentUser} = useSelector((state)=> state.user) 
  return (
    <div className='max-w-lg mx-auto '>DashboardProfile</div>
  )
}

export default DashboardProfile