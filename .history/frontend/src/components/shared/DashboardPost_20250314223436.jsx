import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow } from '../ui/table'

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
      <TableHead className="w-[200px]">Date Updated</TableHead>
      <TableHead>Post Image</TableHead>
      <TableHead>Post Title</TableHead>
      <TableHead >Category</TableHead>
      <TableHead>Delete</TableHead>
      <TableHead>Edit</TableHead>
    </TableRow>
  </TableHeader>

  {userPosts.map((post)=>(
    <TableBody className="divide-y">
        <TableRow key = {post._id}>
            <TableCell>
                {new Date(post.updatedAt).toLocaleDateString()}
            </TableCell>

            <TableCell>
                <Link to={`/post/${post.slug}`}>
                <img src={post.image} alt = {post.title} 
                className='w-20 h-10 '/> 
                </Link>
            </TableCell>
        </TableRow>
    </TableBody>
  ))}
        </Table>
        </>):
( <p>You have no posts yet!</p> )}
    </div>
  )
}

export default DashboardPost 