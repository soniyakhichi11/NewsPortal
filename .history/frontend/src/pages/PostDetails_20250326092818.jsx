import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PostDetails = () => {
    const {postSlug} = useParams()
    const [loading,setLoading] = useState(true)
    const [ error, setError] = useState(false)
    const [post, setPost] = useState(null)
    useEffect(()=>{
         const fetchPost = async()=>{
            try {
                setLoading(true)
                const res = await fetch(`/api/post/getposts?slug=${postSlug}`)
                const data = await res.json()

                if(!res.ok){
                    setError(true)
                    setLoading(false)

                    return
                }

                if(res.ok){
                   setPost(data,posts[0])
                   setLoading(false)
                   setError(true)
                }
            } catch (error) {
                setError(true)
                setLoading(false)
            }
         }

         fetchPost()

    },[postSlug])

    if(loading){
        return <div className='flex justify-center items-center min-h-screen'>
            <img src="https://www.flaticon.com/free-icon/loading_39979"
            alt="loading"
            className='w-20 animate-spin'/>
        </div>
    }
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
        <h1 className='text-3xl mt-10 p-3 text-center font-bold max-w-3xl mx-auto
        lg:text-4xl text-slate-700 underline'>{post && post.title}</h1>
        <Link  
        to={`/search?category=${post && post.category}`} 
         className='self-center mt-5'>
            <Button variant="outline" className="border border-slate-500">
                {post && post.category}</Button>
         </Link>

         <img src={post && post.image}
          alt={post && post.title} 
          className='mt-10 p-3 max-h-[500px] w-full object-cover'/>

          <div className='flex justify-between p-3 mx-auto w-full max-w-2xl text-xs'>
            <span>{post && new Date(post.createdAt).toLocaleString()}</span>
            <span>{post && (post.content.length/100).toFixed(0)} mins read

            </span>
          </div>
    </main>
  )
}

export default PostDetails