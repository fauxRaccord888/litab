import type { AppRootState } from '$lib/stores/store';
import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { register_SERVER } from '$lib/api/register';

type StringWithValidation = {
  value: string
  regex: string
}

interface RegisterState {
  registerResult: 'idle' | 'pending' | 'succeeded' | 'failed',
  errorMessage: string;

  email: StringWithValidation,
  password: StringWithValidation,
  nickname: StringWithValidation,
}

const initialState: RegisterState = { 
  // eslint-disable-next-line no-useless-escape
  email: {value: '', regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$',},
  nickname: {value: '', regex: '^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$'},
  password: {value: '', regex: '^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{8,16}$'},

  registerResult: 'idle',
  errorMessage: ''
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
    setNickname(state, action: PayloadAction<string>) {
      state.nickname.value = action.payload
    },
    resetResult() {
      return {...initialState}
    }
  },
  extraReducers(builder) {
    builder
      .addCase(requestRegister.pending, (state) => {
        state.registerResult = 'pending'
      })
      .addCase(requestRegister.rejected, (state, action) => {
        state.errorMessage = action.error.message || '알 수 없는 에러가 발생했어요.'
        state.registerResult = 'failed'
      })
      .addCase(requestRegister.fulfilled, (state)  => {
        state.registerResult = 'succeeded'
      })
  }
})

export const requestRegister = createAsyncThunk(
  'register/requestRegister',
  async (_, { getState }) => {
    // TODO Type assertion
    const { register } = getState() as AppRootState
    const { nickname, password, email} = register;
    
    const isAllValid = [nickname, password, email].every((target) => {
      return new RegExp(target.regex).test(target.value)
    })
    if (!isAllValid) throw new Error()

    const response = register_SERVER({
      display_name: nickname.value,
      email: email.value,
      password: password.value
    })

    return response;
  }
)

export const { setPassowrd, setEmail, setNickname, resetResult } = registerSlice.actions
export default registerSlice.reducer