import React from 'react'
import {Link} from 'react-router-dom'
const DashboardSidebar = () => { 
  return (
    <aside className='h-screen w-64 bg-slate-200 text-slate-800 flex flex-col'>
        {/* logo header */}
    <div className='p-4 flex items-center justify-center bg-slate-200'>
     <h1 className='text-2xl font-bold '>Dashboard</h1>
     </div>
        {/* Navigation Link */}
        <nav className='flex-1 p-4'>
            <ul className='space-y-4'>
                <li>
                    <Link to={"/dashboard?tab=profile"} className='flex items-center p-2
                    hover:bg-slate-300 rounded'>
                        <FaUserAlt />
                        <span>Profile</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default DashboardSidebar