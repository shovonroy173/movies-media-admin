import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth" , 
    initialState:{
        loading:false , 
        currentUser : null , 
        error:null , 
    } , 
    reducers:{
        loginStart: (state)=>{
            state.loading = true;
            state.error = false;
        } , 
        loginSuccess : (state , action)=>{
            state.loading = false;
            state.currentUser = action.payload;
            state.error = false;
        } , 
        loginFailure : (state)=>{
            state.loading = false;
            state.error = true;
        } , 
        registerStart: (state)=>{
            state.loading = true;
            state.error = false;
        } , 
        registerSuccess : (state , action)=>{
            state.loading = false;
            state.currentUser = action.payload;
            state.error = false;
        } , 
        registerFailure : (state)=>{
            state.loading = false;
            state.error = true;
        } , 
        logOut : (state)=>{
            state.loading = false;
            state.currentUser = null;
            state.error = false;
        }
    }
});

export const {loginStart , loginSuccess , loginFailure , logOut , registerStart , registerSuccess , registerFailure} = authSlice.actions;

export default authSlice.reducer;