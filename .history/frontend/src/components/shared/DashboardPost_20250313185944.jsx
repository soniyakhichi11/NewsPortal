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
    <div className='flex flex-col items-center justify-center w-full p-3'>
        {currentUser.isAdmin && userPosts.length>0?
        (<p>You have some posts</p>):
( <p>You </p> )}
    </div>
  )
}

export default DashboardPost 