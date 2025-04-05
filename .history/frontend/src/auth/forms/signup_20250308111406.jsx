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
          className="font-bold text-2xl sm:text"
          ></Link>
        </div>
      </div>
    </div>
  )
}

export default signup