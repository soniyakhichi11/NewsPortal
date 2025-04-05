import React from 'react'

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
                    <link to={"/dashboard?tab=profile"} className='flex items-center p-2
                    hover:bg-slate-300'></link>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default DashboardSidebar