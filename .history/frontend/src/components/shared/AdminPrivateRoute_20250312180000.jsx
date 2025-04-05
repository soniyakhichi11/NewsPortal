import React from 'react'
import { useSelector } from 'react-redux'

const AdminPrivateRoute = () => {
  
    const {currentUser} = useSelector((state)=> state.user)

  return currentUser && currentUser.is?<Outlet/>:<Navigate to="/sign-in"/>
  
}

export default AdminPrivateRoute