import React from 'react'

const Comment = ({comment}) => {
    useEffect(()=>{
        const getUser = async()=>{
            try {
                const res = await fetch(`/api/user/${comment.userId}`)

                const data= await re
                
            } catch (error) {
                console.log(error.message)
            }
        }
        getUser()
    },[comment])
  return (
    <div>Comment</div>
  )
}

export default Comment