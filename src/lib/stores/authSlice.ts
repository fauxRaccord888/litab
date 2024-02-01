import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { User as SessionUser } from '@supabase/supabase-js';

export interface AuthState {
    sessionUser: SessionUser | null
}

const initialState: AuthState = { 
  sessionUser: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSessionUser(state, action: PayloadAction<SessionUser | null>) {
      state.sessionUser = action.payload
    },
    resetUserInfo(state) {
      state.sessionUser = null
    }
  },
})

export const { setSessionUser, resetUserInfo } = authSlice.actions
export default authSlice.reducer