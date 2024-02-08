import { createSlice } from '@reduxjs/toolkit';
export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        id:'',
        message:''
    },
    reducers: {
        onSaveMessage: (state,{payload})=>{
            state.id = payload.id;
            state.message = payload.message;
        },
        
    }
});
        // Action creators are generated for each case reducer function
        export const { onSaveMessage } =  messageSlice.actions;