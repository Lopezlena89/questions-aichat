import { createSlice } from '@reduxjs/toolkit';

export const groupMessage = createSlice({
    name: 'groupMessage',
    initialState: {
        id:'',
        groupMessage:[]
    },
    reducers: {
        getGroup: (state,{payload})=>{
            state.id = payload.groupMessages._id
            state.groupMessage = payload.groupMessages.messages
        },
        addMessageGroup: (state,{payload})=>{
            state.id = payload.groupMessage._id
            state.groupMessage = payload.groupMessage.messages
        },
        
        
    }
});
        // Action creators are generated for each case reducer function
        export const { getGroup,addMessageGroup } =  groupMessage.actions;