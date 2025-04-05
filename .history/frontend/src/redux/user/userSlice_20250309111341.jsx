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
        signInStart:(state)=>{
           tate.loading=true
            state.error  s= null
        },

        signInSucess:(state,action){
            state.currentUser=action.payload

        }
    }, 
})