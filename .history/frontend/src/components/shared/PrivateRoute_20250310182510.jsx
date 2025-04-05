import React from 'react'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
    const currentUser = useSelector
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute