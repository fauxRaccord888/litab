import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import type { User as SessionUser } from '@supabase/supabase-js';

import { getProfile_SERVER } from '$lib/api/getProfile';
import { supabaseClient } from '$lib/utils/supabase/client';

import { requestRegister } from './registerSlice';
import { requestSignIn } from './signInSlice';
import { Tables } from '$lib/api/supabase/types';
import { registerTableOnly_SERVER } from '$lib/api/registerTableOnly';

export interface AuthState {
    sessionUser: SessionUser | null
    user: Tables<'profiles'> | null
}

const initialState: AuthState = { 
  sessionUser: null,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut(state) {
      state.sessionUser = null
      state.user = null
      supabaseClient.auth.signOut({scope: 'local'})
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getSessionUser.fulfilled, (state, action) => {
        state.sessionUser = action.payload
      })
      .addCase(getTableUser.fulfilled, (state, action) => {
        state.user = action.payload
      })
    builder
      .addCase(requestRegister.fulfilled, (state, action) => {
        state.sessionUser = action.payload.sessionUser
        state.user = action.payload.user
      })
      .addCase(requestSignIn.fulfilled, (state, action) => {
        state.sessionUser = action.payload.user
      })
  }
})

export const getSessionUser = createAsyncThunk(
    'auth/getSessionUser',
    async () => {
      const { data } = await supabaseClient.auth.getSession()
      const sessionUser = data?.session?.user || null
      return sessionUser
    }
)

export const getTableUser = createAsyncThunk(
  'auth/getTableUser',
  async (payload: SessionUser | null) => {
    if (!payload) return null

    let user: Tables<'profiles'> | null
    try {
      user = await getProfile_SERVER(payload, supabaseClient) 
    } catch (err) {
      user = await registerTableOnly_SERVER(payload, supabaseClient)
    }

    return user ?? null
  }
)

export const { signOut } = authSlice.actions
export default authSlice.reducer