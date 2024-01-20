import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type StringWithValidation = {
  value: string
  regex: string
}

export interface RegisterState {
  email: StringWithValidation,
  password: StringWithValidation,
}

const initialState: RegisterState = { 
  // eslint-disable-next-line no-useless-escape
  email: {value: '', regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$',},
  password: {value: '', regex: '^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{8,16}$'},
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email.value = action.payload
    },
    setPassowrd(state, action: PayloadAction<string>) {
      state.password.value = action.payload
    },
    resetResult() {
      return {...initialState}
    }
  }
})

export const { setPassowrd, setEmail, resetResult } = registerSlice.actions
export default registerSlice.reducer