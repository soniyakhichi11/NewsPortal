import React from 'react'
import { useSelector } from 'react-redux'

const CommentSection = () => {
    const currentUser = useSelector((state)=>state.user)
  return (
    <div className='max-w-3xl mx-auto w-full p-3'>
        {currentUser ? <div cn>}
        </div>
  )
}

export default CommentSection