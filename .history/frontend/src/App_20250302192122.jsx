import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter } from 'react-router-dom'
import Signin 
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
