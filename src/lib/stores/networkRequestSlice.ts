import { createSlice } from '@reduxjs/toolkit'

import { requestRegister } from '$lib/stores/registerSlice';
import { requestSignIn } from '$lib/stores/signInSlice';

export interface NetworkRequestState {
  status: 'idle' | 'pending' | 'succeeded' | 'failed',
  errorMessage: string;
}

const initialState: NetworkRequestState = { 
    status: 'idle',
    errorMessage: ''
}

// TODO network request를 하나로 관리하는 것은 안 좋음
// 하나의 페이지에서 복수의 리퀘스트를 할 경우 병렬처리 어려움

const networkRequestSlice = createSlice({
  name: 'networkRequest',
  initialState,
  reducers: {
    resetStatus() {
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
      });

    builder
      .addCase(requestSignIn.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(requestSignIn.rejected, (state, action) => {
        state.errorMessage = action.error.message || '알 수 없는 에러가 발생했어요.'
        state.status = 'failed'
      })
      .addCase(requestSignIn.fulfilled, (state)  => {
        state.status = 'succeeded'
      })
    }
})

export const { resetStatus } = networkRequestSlice.actions
export default networkRequestSlice.reducer