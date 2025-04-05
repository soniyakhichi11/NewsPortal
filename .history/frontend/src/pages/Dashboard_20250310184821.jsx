import React from 'react'

const Dashboard = () => {
  return <div className='min-h-screen flex flex-col md:flex-row
  w-full'>
    <div className='hidden'>
      <DashboardSidebar/>
    </div>

  </div>
}

export default Dashboard