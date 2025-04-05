import React from 'react'
import { FaHome } from "react-icons/fa";
const BottomNavBar = () => {
  return (
    <nav className='md:hidden fixed bottom-0 left-0 right-0 bg-slate-200
    border-t border-gray-300 p-2 flex justify-around'>
        <Link to ="/" className='flex flex-col items-center text-slate-800'>
        <FaHome size=/>
        <span>Home</span>
        </Link>

        <Link to ="/dashboard?tab=profile" className='flex flex-col items-center text-slate-800'>
        <FaHome />
        <span>Home</span>
        </Link>
    </nav>
  )
}

export default BottomNavBar