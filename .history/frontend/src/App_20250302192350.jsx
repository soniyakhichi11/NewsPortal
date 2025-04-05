import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter Routes } from 'react-router-dom'
import Signin from "./auth/forms/Signin"
import Signup from "./auth/forms/signup"
import { Home } from 'lucide-react'
const App = () => {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/sign-in" element={<Signin />} />
  <Route path="/sign-up" element={<Signup />} />
  <Route path ="/" element={<Home/>}></Route>
 </Routes>
 </BrowserRouter>
   
  )
}

export default App
