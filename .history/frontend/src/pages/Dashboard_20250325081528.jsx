import React from 'react'
import { useEffect,useState } from 'react';
import DashboardSidebar from '../components/shared/DashboardSidebar';
import DashboardProfile from '../components/shared/DashboardProfile';
import { useLocation } from 'react-router-dom';
import BottomNavBar from '../components/shared/BottomNavbar';
import DashboardPost from '@/components/shared/DashboardPost';
import DashboardUsers from '@/components/shared/DashboardUsers';
const Dashboard = () => {
  const location = useLocation() ;
  const [tab, setTab]= useState("")
  useEffect(()=>{
    const urlParams= new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get("tab")
    // console.log(tabFromUrl)
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  },[location.search])
  return <div className='min-h-screen flex flex-col md:flex-row
  w-full'>
    {/* sidebar */}
    <div className='hidden md:block'>
      <DashboardSidebar/>
    </div>
    
   <BottomNavBar/> 

{/* profile */}
    <div className='w-full'>
      {/* profile */}
      {tab === "profile" && <DashboardProfile/>}
      {/* news article */}
      {tab === "posts" && <DashboardPost/>}

{/*users */}
{tab === "posts" && <DashboardUsers/>}

      </div>
  </div>
}

export default Dashboard