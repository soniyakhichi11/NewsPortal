import React from 'react'
import {Button} from "../ui/button"
export const GoogleAuth = () => {
    const handleGoogleClick=()=>{
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({prompt:"select_account"})
    }
  return (
    <div>
        <Button type="button" className ="bg-green-500 w-full" onClick={handleGoogleClick}>
            Continue with Google
        </Button>
    </div>
  )
}
