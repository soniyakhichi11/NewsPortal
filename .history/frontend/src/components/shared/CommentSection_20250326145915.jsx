import React from 'react'
import { useSelector } from 'react-redux'

const CommentSection = () => {
    const currentUser = useSelector((state))
  return (
    <div className='max-w-3xl mx-auto w-full p-3'>
        {currentUser ? ():()}
        </div>
  )
}

export default CommentSection