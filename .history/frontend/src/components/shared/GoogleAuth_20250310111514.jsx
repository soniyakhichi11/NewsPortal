import React from 'react'
import {Button} from "../ui/button"
import{app} from "@/firebase"
import {getAuth , GoogleAuthProvider, signInWithPopup} from "firebase/auth"

export const GoogleAuth = () => {
    const auth = getAuth(app)
    const handleGoogleClick=async()=>{
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({prompt:"select_account"})
        try{
            const firebaseResponse = await signInWithPopup(auth,provider)
            const res = await fetch("/api/auth/google",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                        name:firebaseResponse.user.
                })
            })
        }catch(error){

        }
    }
  return (
    <div>
        <Button type="button" className ="bg-green-500 w-full" onClick={handleGoogleClick}>
            Continue with Google
        </Button>
    </div>
  )
}
