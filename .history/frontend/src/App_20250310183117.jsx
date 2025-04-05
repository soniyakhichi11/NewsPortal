import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Signin from "./auth/forms/Signin"
import SignUpForm from "./auth/forms/signup"
import Home from "./pages/Home"
import Header from "./components/shared/Header"
import { Toaster } from './components/ui/sonner'
import Footer from'./components/shared/Footer'
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path="/sign-in" element={<Signin />} />
  <Route path="/sign-up" element={<SignUpForm />} />
  <Route path ="/" element={<Home/>}></Route>
  {/* we did this in dashboard because its not private and we cant access it directl */}
  <Route>
  <Route path ="/dashboard" element={Dashboard}/> 
  </Route>
 
 </Routes>
 <Toaster/>
 <Footer/>
 </BrowserRouter>
   
  )
}

export default App
