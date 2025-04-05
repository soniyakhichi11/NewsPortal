import { combineReducers,configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web and AsyncStorage for react-native


const rootReducer = combineReducers({
    user:userReducer,

})
const persistConfig = {
    key: 'root',
    storage,
    version:1,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer:persistedReducer,


    middleware:

}) 