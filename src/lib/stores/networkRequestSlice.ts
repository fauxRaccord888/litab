import { createSlice } from '@reduxjs/toolkit'

import { requestRegister } from '$lib/stores/registerSlice';

export interface NetworkRequestState {
  status: 'idle' | 'pending' | 'succeeded' | 'failed',
  errorMessage: string;
}

const initialState: NetworkRequestState = { 
    status: 'idle',
    errorMessage: ''
}

const networkRequestSlice = createSlice({
  name: 'networkRequest',
  initialState,
  reducers: {
    resetResult() {
      return {...initialState}
    }
  },
  extraReducers(builder) {
    builder
      .addCase(requestRegister.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(requestRegister.rejected, (state, action) => {
        state.errorMessage = action.error.message || '알 수 없는 에러가 발생했어요.'
        state.status = 'failed'
      })
      .addCase(requestRegister.fulfilled, (state)  => {
        state.status = 'succeeded'
      })
    }
})

export const { resetResult } = networkRequestSlice.actions
export default networkRequestSlice.reducer