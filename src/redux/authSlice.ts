import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'cheking',//authenticated,not-authenticated
        user:{},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: (state)=>{
            state.status = 'cheking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state,{payload}) =>{
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: (state) =>{
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = undefined;
        },
        clearErrorMessage: (state) =>{
            state.errorMessage = undefined
        }
    }
});
        // Action creators are generated for each case reducer function
        export const { onChecking,onLogin,onLogout,clearErrorMessage } =  authSlice.actions;