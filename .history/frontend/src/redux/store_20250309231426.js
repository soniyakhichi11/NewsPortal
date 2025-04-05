import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./u ser/userSlice"
import {persistedReducer}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer:{
        user:userReducer
    }, 

})