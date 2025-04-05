import React from 'react'

const BottomNavBar = () => {
  return (
    <nav className='md:hidden fixed bottom-0 left-0 right-0 bg-slate-200
    border-t border-gray-300 p-2 flex justify-around'>
        <Link to ="/" className='flex flex-col items-center text-'>
        </Link>
    </nav>
  )
}

export default BottomNavBar