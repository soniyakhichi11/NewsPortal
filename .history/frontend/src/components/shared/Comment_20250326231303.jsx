import React from 'react'

const Comment = ({comment}) => {
    useEffect(()=>{
        const getUser = async()=>{
            try {
                const res = await fetch(`/api`)
                
            } catch (error) {
                console.log(error.message)
            }
        }
    })
  return (
    <div>Comment</div>
  )
}

export default Comment