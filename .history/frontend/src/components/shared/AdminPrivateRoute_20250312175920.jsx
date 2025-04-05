import React from 'react'

const AdminPrivateRoute = () => {
  return (
    const {currentUser} = useSelector((state)=> state.user)
    
  return currentUser?<Outlet/>:<Navigate to="/sign-in"/>
  )
}

export default AdminPrivateRoute