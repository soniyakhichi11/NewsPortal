import React, { useEffect, useState } from 'react'

const Comment = ({comment}) => {
    const [user,setuser] = useState({})
    useEffect(()=>{
        const getUser = async()=>{
            try {
                const res = await fetch(`/api/user/${comment.userId}`)

                const data= await res.json()
                if(res.ok){
                    setuser(data)
                }
                
            } catch (error) {
                console.log(error.message)
            }
        }
        getUser()
    },[comment])
  return (
    <div cn></div>
  )
}

export default Comment