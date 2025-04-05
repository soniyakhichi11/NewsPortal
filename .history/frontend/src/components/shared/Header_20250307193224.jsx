import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header classname="flex p-4 border-b-2 justify-between items-center">
        <Link to={"/"} className="self-center whitespace-nowrap text-sm
         sm:text-lg font-semibold">Soniya</Link>
    </nav>
  )
}

export default Header