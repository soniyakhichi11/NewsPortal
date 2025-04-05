import React from 'react'

const signup = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl sm:max-w-5xl
      mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link
          to={"/"}
          className="font-bold text-2xl sm:text-4xl flex flex-wrap"
          >
              <span className='text-slate-500'>Morning</span>
              <span className='text-slate-900'>Dispatch</span>
          </Link>
          <h2 className='text-[24px] md:text-[30px]'>Create a new account</h2>
        </div>
      </div>
    </div>
  )
}

export default signup