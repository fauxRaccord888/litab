import type { AppRootState } from '$lib/stores/store';
import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { requestUserRegistration } from '$lib/api/register';

type StringWithValidation = {
  value: string
  regex: string
}

interface RegisterState {
  registerResult: 'idle' | 'pending' | 'succeeded' | 'failed',
  errorMessage: string;

  id: StringWithValidation,
  password: StringWithValidation,
  nickname: StringWithValidation,
  email: StringWithValidation,
}

const initialState = { 
  nickname: {value: '', regex: '^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$'},
  password: {value: '', regex: '^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{8,16}$'},
  // eslint-disable-next-line no-useless-escape
  email: {value: '', regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$',},

  registerResult: 'idle',
  errorMessage: ''
} as RegisterState

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setId(state, action: PayloadAction<string>) {
      state.id.value = action.payload
    },
    setPassowrd(state, action: PayloadAction<string>) {
      state.password.value = action.payload
    },
    setNickname(state, action: PayloadAction<string>) {
      state.nickname.value = action.payload
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email.value = action.payload
    },
    resetResult(state) {
      state.registerResult = 'idle'
      state.errorMessage = ''
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
    const { id, nickname, password, email} = register;
    
    const isAllValid = [id, nickname, password, email].every((target) => {
      return new RegExp(target.regex).test(target.value)
    })
    if (!isAllValid) throw new Error()

    const response = requestUserRegistration({
      display_name: nickname.value,
      email: email.value,
      password: password.value
    })

    return response;
  }
)

export const { setId, setPassowrd, setEmail, setNickname, resetResult } = registerSlice.actions
export default registerSlice.reducer