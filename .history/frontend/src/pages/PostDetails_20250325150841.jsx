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
                const res = await fetch(`/api/post/getposts?`)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
         }

         fetchPost()

    },[postSlug])
  return (
    <div>PostDetails</div>
  )
}

export default PostDetails