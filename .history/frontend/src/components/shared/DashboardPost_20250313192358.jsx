import React, { useEffect, useState } from 'react'
import { Table, TableCaption } from '../ui/table'

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
        (<>
        <Table>
        <TableCaption>A list of Published Articles.</TableCaption>
        <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
        </Table>
        </>):
( <p>You have no posts yet!</p> )}
    </div>
  )
}

export default DashboardPost 