import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice"
import {persistReducer} from "redux-persist"
import storage form

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer:{
        user:userReducer
    }, 

}) 