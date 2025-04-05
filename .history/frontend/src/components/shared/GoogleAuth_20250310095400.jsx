import React from 'react'
import {Button} from "../ui/button"
export const GoogleAuth = () => {
    const handleGoogleClick=()=>{
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({prompy})
    }
  return (
    <div>
        <Button type="button" className ="bg-green-500 w-full" onClick={handleGoogleClick}>
            Continue with Google
        </Button>
    </div>
  )
}
