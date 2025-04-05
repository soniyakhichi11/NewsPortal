import React, { useEffect } from 'react'

const PostDetails = () => {
    const [loading,setLoading] = useState(true)
    const [ error, setError]
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