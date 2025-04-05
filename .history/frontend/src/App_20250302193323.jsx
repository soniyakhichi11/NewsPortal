import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Signin from "./auth/forms/Signin"
import Signup from "./auth/forms/signup"
import Home from "./pages/Home"
import Header from "./components/shared/"
const App = () => {
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path="/sign-in" element={<Signin />} />
  <Route path="/sign-up" element={<Signup />} />
  <Route path ="/" element={<Home/>}></Route>
 </Routes>
 </BrowserRouter>
   
  )
}

export default App
