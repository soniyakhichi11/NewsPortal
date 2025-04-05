import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/sign-in" element={<Home />} />
 </Routes>
 </BrowserRouter>
   
  )
}

export default App
