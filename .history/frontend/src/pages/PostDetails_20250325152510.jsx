import React, { useEffect } from 'react'

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
            className=''/>
        </div>
    }
  return (
    <div>PostDetails</div>
  )
}

export default PostDetails