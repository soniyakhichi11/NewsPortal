import { createSlice } from '@reduxjs/toolkit'

const initialState={
    currentUser:null,
    error:null,
    loading:false,
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signInStart:(state,action)=>{
            state.loading=true
            state.error = null
        },

        signIn
    }, 
})