import React, { useEffect } from 'react'

const PostDetails = () => {
    const [loading,setLoading] = useState(true)
    
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