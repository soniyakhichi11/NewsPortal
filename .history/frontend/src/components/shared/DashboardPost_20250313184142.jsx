import React, { useEffect, useState } from 'react'

const DashboardPost = () => {

    const {currentUser} = useSelector((state)=>state.user)
    const [userPosts, setUserPosts] = useState([])
    
    useEffect(()=>{
        const fetchPosts = async()=>{
            try {
                const res = await fetchPosts(`/api/post/getposts?userId=${CurrentUser._id}`)
                const data = await res.json()
                if(res.ok){
                    setUserPosts(data.posts)
                }

            } catch (error) {
                console.log(error)
            }
        }

        if(currentUser.isAdmin){
            fetchPosts()
        }
    },[currentUser._id])
  return (
    <div ></div>
  )
}

export default DashboardPost 