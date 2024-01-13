import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import type { User } from '@supabase/supabase-js';

import { supabaseClient } from '$lib/utils/supabase/client';
import { requestRegister } from './registerSlice';
import { requestSignIn } from './signInSlice';

export interface AuthState {
    user: User | null
}

const initialState: AuthState = { 
    user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut(state) {
      state.user = null
      supabaseClient.auth.signOut({scope: 'local'})
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkLocalStorage.fulfilled, (state, action) => {
        state.user = action.payload
      })
    builder
      .addCase(requestRegister.fulfilled, (state, action) => {
        state.user = action.payload.user
      })
      .addCase(requestSignIn.fulfilled, (state, action) => {
        state.user = action.payload.user
      })
  }
})

export const checkLocalStorage = createAsyncThunk(
    'auth/checkLocalStorage',
    async () => {
      const { data } = await supabaseClient.auth.getSession()
      if (data?.session?.user) return data.session.user
      return null
    }
)

export const { signOut } = authSlice.actions
export default authSlice.reducer