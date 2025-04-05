import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice"
import {persistedReducer} form "re"
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer:{
        user:userReducer
    }, 

})