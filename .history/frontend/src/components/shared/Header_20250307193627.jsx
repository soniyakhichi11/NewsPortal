import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header classname="shadow-lg sticky">
        <Link to={"/"} className="self-center whitespace-nowrap text-sm
         sm:text-lg font-semibold">
            Soniya</Link>
    </header>
  )
}

export default Header 