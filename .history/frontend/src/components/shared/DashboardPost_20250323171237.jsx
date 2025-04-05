import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow } from '../ui/table'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'

const DashboardPosts = () => {

    const {currentUser} = useSelector((state)=>state.user)
    const [userPosts, setUserPosts] = useState([])
    const [showMore, setShowMore] = useState(true)
    useEffect(()=>{
        const fetchPosts = async()=>{
            try {
                const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`)
                const data = await res.json()
                if(res.ok){
                    setUserPosts(data.posts)

                    if(data.posts.length <9){
                        setShowMore(false)
                    }
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
                className='w-20 h-10 object-cover bg-gray-500'/> 
                </Link>
            </TableCell>

            <TableCell>
                <Link to={`/post/${post.slug}`}>
                {post.title}
                </Link>
            </TableCell>
            <TableCell>
                {post.category}
            </TableCell>
            <TableCell>
                <span className='font-medium text-red-500 hover:underline
                cursor-pointer' onClick={()=>deletePost(post._id)}>Delete</span>
            </TableCell>
            <TableCell>
                <Link to={`/update-post/${post._id}`} className='font-medium text-green-600 hover:underline
                cursor-pointer'>
                <span>Edit</span>
                </Link>
            </TableCell>
        </TableRow>
    </TableBody>
  ))}
        </Table>
        {}
        </>):
( <p>You have no posts yet!</p> )}
    </div>
  )
}

export default DashboardPosts 