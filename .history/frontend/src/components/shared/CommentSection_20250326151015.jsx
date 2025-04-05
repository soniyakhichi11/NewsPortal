import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CommentSection = () => {
    const currentUser = useSelector((state)=>state.user)
  return (
    <div className='max-w-3xl mx-auto w-full p-3'>
        {currentUser ?
         (<div className='flex items-center gap-1 my-5 text-gray-500 text-sm'>
            <p>Signed in as:</p>
            <img src= {currentUser.profilePicture}
            alt="Profile Pic"
            className='h-5 w-5 object-cover rounded-full'/>
            <Link to={"/dashboard/tab=profile"} className='text-sm
             text-blue-800 hover:underline'>
            @{currentUser.username}
            </Link>
         </div>
        ):(
        <div className='text-sm text-gray-700 my-5 flex gap-1'>
                You must be signed in to comment.
                <Link to={"/sign-in"} className=''></Link>
        </div>
        )}
        </div>
  )
}

export default CommentSection