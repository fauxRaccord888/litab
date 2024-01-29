import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { User as SessionUser } from '@supabase/supabase-js';
import type { GetUserByIdQuery } from '$lib/graphql/__generated__/graphql';
import type { FirstNodeOfCollection } from '$lib/types/graphql';

type UserNode = FirstNodeOfCollection<GetUserByIdQuery["usersCollection"]>
export interface AuthState {
    sessionUser: SessionUser | null
    user: UserNode | null
}

const initialState: AuthState = { 
  sessionUser: null,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserNode | null>) {
      state.user = action.payload
    },
    setSessionUser(state, action: PayloadAction<SessionUser | null>) {
      state.sessionUser = action.payload
    },
    resetUserInfo(state) {
      state.sessionUser = null
      state.user = null
    }
  },
})

export const { setUser, setSessionUser, resetUserInfo } = authSlice.actions
export default authSlice.reducer