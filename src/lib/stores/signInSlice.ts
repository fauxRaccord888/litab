import type { PayloadAction } from '@reduxjs/toolkit'
import {  createSlice } from '@reduxjs/toolkit'

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

export const { setPassowrd, setEmail, resetResult } = signInSlice.actions
export default signInSlice.reducer