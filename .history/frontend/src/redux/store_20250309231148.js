import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice"

const 
export const store = configureStore({
    reducer:{
        user:userReducer
    }, 

})