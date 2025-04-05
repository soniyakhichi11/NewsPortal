import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className="shadow-lg sticky">
      <div className="flex justify-between items-center max-w-6xl lg:max-w-7xl mx-auto p-4">
        <Link to={"/"}><h1 className='font-bold text-xl sm'></h1></Link>
      </div>
    </header>
  )
}

export default Header 