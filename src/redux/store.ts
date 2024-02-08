import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './authSlice'
import { groupMessage } from './groupMessageSlice'
import { closeOpenSide } from './closeOpenSide'
import { messageSlice } from './messageSlice'
import { idSelect } from './idSelect'


export const store = configureStore({
  reducer: {
    idSelect: idSelect.reducer,
    auth:     authSlice.reducer,
    message:  messageSlice.reducer,
    groupMessage:  groupMessage.reducer,
    closeOpenSide:  closeOpenSide.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch