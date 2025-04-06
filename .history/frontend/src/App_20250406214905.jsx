import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import SignIn from "./auth/forms/Signin"
import SignUpForm from "./auth/forms/signup"
import Home from "./pages/Home"
import Header from "./components/shared/Header"
import { Toaster } from './components/ui/sonner'
import Footer from'./components/shared/Footer'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/shared/PrivateRoute'
import Newsarticle from './pages/Newsarticle'
import CreatePost from './pages/CreatePost'
import AdminPrivateRoute from './components/shared/AdminPrivateRoute'
import Editpost from './pages/Editpost'
import PostDetails from './pages/PostDetails'
import About from './pages/About'
import ScrollToTOp from './components/shared/ScrollToTOp'
import Search from './pages/Search'
const App = () => {
  return (
 <BrowserRouter>
 <Header/>
 <ScrollToTOp/>
 <Routes>
  <Route path="/sign-in" element={<Signin />} />
  <Route path="/sign-up" element={<SignUpForm />} />
  <Route path ="/" element={<Home/>}></Route>
  <Route path ="/about" element={<About/>}></Route>
  <Route path ="/search" element={<Search/>}></Route>
  {/* we did this in dashboard because its not private and we cant access it directly */}
  <Route element ={<PrivateRoute/>}>
  <Route path ="/dashboard" element={<Dashboard/>}/> 
  </Route>
  <Route element ={<AdminPrivateRoute/>}> 
  <Route path ="/create-post" element ={<CreatePost/>} ></Route>
  <Route path ="/update-post/:postId" element ={Editpost}/>
   </Route> 

  {/* <Route path="/news" element ={<Newsarticle/>}></Route> */}
  <Route path="/post/:postSlug" element ={<PostDetails/>}></Route>
 </Routes>
 <Toaster/>
 <Footer/>
 </BrowserRouter>
   
  )
}

export default App
