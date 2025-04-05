import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const about = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

export default about