import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow, TableHeader } from '../ui/table'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../ui/alert-dialog"
  

const DashboardUsers = () => {

    const {currentUser} = useSelector((state)=>state.user)
    const [users, setUsers] = useState([])
    const [showMore, setShowMore] = useState(true)
    const[userIdToDelete,setUserIdToDelete] = usestate("")
    useEffect(()=>{
        const fetchUsers = async()=>{
            try {
                const res = await fetch(`/api/user/getusers`)
                const data = await res.json()
                if(res.ok){
                    setUserPosts(data.users)

                    if(data.users.length < 9){
                        setShowMore(false)
                    }
                }

            } catch (error) {
                console.log(error)
            }
        }

        if(currentUser.isAdmin){
            fetchUsers()
        }
    },[currentUser._id])

    const handleShowMore = async()=>{
        const startIndex = users.length
        try {
            const res =  await fetch(`/api/user/getusers?startIndex=${startIndex}`)

            const data = await res.json()
            if(res.ok){
                setUsers((prev)=>[...prev,...data.users])

                if(data.users.length < 9){
                    setShowMore(false)
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const handledelete
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
    <TableBody className="divide-y"  key = {post._id} >
        <TableRow >
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
            <AlertDialog>
          <AlertDialogTrigger asChild>
            <span  
            onClick={()=>{
                setPostIdToDelete(post._id)
            }}
            className='font-medium text-red-600 hover:underline
                cursor-pointer'>
              Delete 
            </span>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                post and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-600"
                onClick={handleDeletePost}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
            </TableCell>
            <TableCell>
                <Link to={`/update-post/${post._id}`}
                 className='font-medium text-green-600 hover:underline
                cursor-pointer'>
                <span>Edit</span>
                </Link>
            </TableCell>
        </TableRow>
    </TableBody>
  ))}
        </Table>
        {showMore && (
            <button onClick = {handleShowMore}
             className='w-full text-blue-700 self-center text-sm py-7'>
                Show More
             </button>
        )}
        </>):
( <p>You have no posts yet!</p> )}
    </div>
  )
}

export default DashboardUsers