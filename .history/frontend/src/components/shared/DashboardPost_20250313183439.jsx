import React, { useEffect } from 'react'

const DashboardPost = () => {
    useEffect(()=>{
        const fetchPosts = async()=>{
            try {
                const res = await fetchPosts(`/api/post/getposts?userId=${updateCurrentUser._id}`)
            } catch (error) {
                console.log(error)
            }
        }
    })
  return (
    <div>DashboardPost</div>
  )
}

export default DashboardPost 