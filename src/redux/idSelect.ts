import { createSlice } from '@reduxjs/toolkit';
export const idSelect = createSlice({
    name: 'idSelect',
    initialState: {
        id:'',
       
    },
    reducers: {
        onIdSelect: (state,{payload})=>{
            state.id = payload;
           
        },
        
    }
});
        // Action creators are generated for each case reducer function
        export const { onIdSelect } =  idSelect.actions;