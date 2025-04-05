import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice"
import {persisteReducer} from "redux-persist"


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