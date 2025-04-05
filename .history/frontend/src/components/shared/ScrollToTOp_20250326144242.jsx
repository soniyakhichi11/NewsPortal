import React from 'react'

const ScrollToTOp = () => {
    const {pathname} = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    })
  return (
    null
  )
}

export default ScrollToTOp