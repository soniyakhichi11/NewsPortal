import React, { useEffect } from 'react'

const PostDetails = () => {
    const {postSlug} = useParams()
    const [loading,setLoading] = useState(true)
    const [ error, setError] = useState(false)
    const [post, setPost] = useState(null)
    useEffect(()=>{
         const fetchPost = async()=>{
            try {
                
            } catch (error) {
                
            }
         }

         fetchPost()

    },[])
  return (
    <div>PostDetails</div>
  )
}

export default PostDetails