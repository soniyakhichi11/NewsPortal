import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice"

const persistedReducer = configureStore(persistConfig, rootReducer)
export const store = configureStore({
    reducer:{
        user:userReducer
    }, 

})