import type { AppRootState } from '$lib/stores/store';
import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { signIn_SERVER } from '$lib/api/auth';

import { supabaseClient } from '$lib/utils/supabase/client';


export interface SignInState {
  password: string,
  email: string,
}

const initialState: SignInState = { 
  email: '',
  password: '',
}

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload
    },
    setPassowrd(state, action: PayloadAction<string>) {
      state.password = action.payload
    },
    resetResult() {
      return {...initialState}
    }
  },
})

export const requestSignIn = createAsyncThunk(
  'signIn/requestSignIn',
  async (_, { getState }) => {
    // TODO Type assertion
    const { signIn } = getState() as AppRootState
    
    const response = signIn_SERVER(signIn, supabaseClient)
    return response;
  }
)

export const { setPassowrd, setEmail, resetResult } = signInSlice.actions
export default signInSlice.reducer