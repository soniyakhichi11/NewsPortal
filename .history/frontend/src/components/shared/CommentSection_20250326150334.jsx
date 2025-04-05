import React from 'react'
import { useSelector } from 'react-redux'

const CommentSection = () => {
    const currentUser = useSelector((state)=>state.user)
  return (
    <div className='max-w-3xl mx-auto w-full p-3'>
        {currentUser ?
         (<div className='flex items-center gap-1 my-5 text-gray-500 text-sm'>
            <p>Signed in as:</p>
            <img src= {currentUser.}alt=''/>
         </div>
        ):(
        <></>
        )}
        </div>
  )
}

export default CommentSection