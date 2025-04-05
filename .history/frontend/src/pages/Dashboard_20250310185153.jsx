import React from 'react'

const Dashboard = () => {
  const [tab, setTab]= useState("")
  useEffect(()=>{})
  return <div className='min-h-screen flex flex-col md:flex-row
  w-full'>
    {/* sidebar */}
    <div className='hidden md:block'>
      <DashboardSidebar/>
    </div>
{/* profile */}
    <div></div>
  </div>
}

export default Dashboard