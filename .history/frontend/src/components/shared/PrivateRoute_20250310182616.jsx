import React from 'react'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
    const {currentUser} = useSelector((state)=> state.user)
  return currentUser
}

export default PrivateRoute