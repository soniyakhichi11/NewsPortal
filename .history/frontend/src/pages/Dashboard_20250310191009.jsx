import React from 'react'

const Dashboard = () => {
  const location = useLocation() ;
  const [tab, setTab]= useState("")
  useEffect(()=>{
    const urlParams= new URLSearchParams(location,search)
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
{/* profile */}
    <div>{tab === "profile" && <Dashboard/>}</div>
  </div>
}

export default Dashboard