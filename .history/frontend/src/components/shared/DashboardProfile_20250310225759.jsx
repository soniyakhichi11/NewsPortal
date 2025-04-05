import React from 'react'

const DashboardProfile = () => {
   const {currentUser} = useSelector((state)=> state.user) 
  return (
    <div className=''>DashboardProfile</div>
  )
}

export default DashboardProfile