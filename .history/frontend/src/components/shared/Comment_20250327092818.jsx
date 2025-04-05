import React, { useEffect, useState } from 'react'
import moment from "moment"

const Comment = ({comment,onLike}) => {
    const [user,setuser] = useState({})
    const { currentUser } = useSelector((state) => state.user)
    useEffect(()=>{
        const getUser = async()=>{
            try {
                const res = await fetch(`/api/user/${comment.userId}`)

                const data= await res.json()
                if(res.ok){
                    setuser(data)
                }
                
            } catch (error) {
                console.log(error.message)
            }
        }
        getUser()
    },[comment])
  return (
    <div className="flex p-4 border-b border-slate-300 text-sm gap-2">
      <div className="flex-shrink-0 mr-0">
        <img
          src={user.profilePicture}
          alt={user.username}
          className="w-10 h-10 rounded-full bg-gray-200"
        />
      </div>

      <div className="flex-1">
        <div className="flex items-center mb-1">
          <span className="font-semibold mr-1 text-sm truncate">
            {user ? `@${user.username}` : "Unknown"}
          </span>

          <span className="text-gray-500 text-sm">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
  )
}

export default Comment