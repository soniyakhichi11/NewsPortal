import React from 'react'
import {Link} from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa"; 
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
                        <FaUserAlt className='mr-3'/>
                        <span>Profile</span>
                    </Link>
                </li>
            </ul>

            <div className='p-4 border-t border-gray-700'>
                <button className='flex items-center w-full p-2 hover:'></button>
            </div>
        </nav>
    </aside>
  )
}

export default DashboardSidebar