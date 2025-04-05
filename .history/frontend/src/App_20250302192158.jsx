import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter } from 'react-router-dom'
import Signin from "./auth/forms/Signin"
import Signup from "./auth/forms/signup"
const App = () => {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/sign-in" element={<Signin />} />
  <Route path="/sign-up" element={<Signup />} />
 </Routes>
 </BrowserRouter>
   
  )
}

export default App
