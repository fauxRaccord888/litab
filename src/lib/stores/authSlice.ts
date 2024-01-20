import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { User as SessionUser } from '@supabase/supabase-js';
import type { Tables } from '$lib/database/types';

type User = Tables<'profiles'>
export interface AuthState {
    sessionUser: SessionUser | null | undefined
    user: User | null | undefined
}

const initialState: AuthState = { 
  sessionUser: null,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | undefined>) {
      state.user = action.payload
    },
    setSessionUser(state, action: PayloadAction<SessionUser | undefined>) {
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