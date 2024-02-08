import { createSlice } from '@reduxjs/toolkit';
export const closeOpenSide = createSlice({
    name: 'closeOpenSide',
    initialState: {
        isSideMenuOpen: false
        
    },
    reducers: {
        openSideMenu: (state)=>{
            state.isSideMenuOpen = true;
        },
        closeSideMenu: (state)=>{
            state.isSideMenuOpen = false;
        },
        
    }
});
        // Action creators are generated for each case reducer function
        export const { openSideMenu, closeSideMenu } =  closeOpenSide.actions;