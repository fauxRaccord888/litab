import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { Tables } from '$lib/database/types';

type PreferenceTest = Tables<'preference_tests'>

interface PreferenceState {
  preferenceData: PreferenceTest[];
  userPreference: Record<string, boolean>;
}

interface PreferencePayload {
  item: PreferenceTest
  userValue: boolean
}

const initialState: PreferenceState = { 
  preferenceData: [],
  userPreference: {}
} 

const preferenceSlice = createSlice({
  name: 'preference',
  initialState,
  reducers: {
    setPreferenceTest(state, action: PayloadAction<PreferenceTest[] | null>) {
      if (action.payload) {
        state.preferenceData = action.payload
      }
    },
    // TODO - Redux 페이로드 전달 방식에 따른 오버헤드 가능성(값, 주소 확인 필요)
    setPreference(state, action: PayloadAction<PreferencePayload>) {
      const { item, userValue } = action.payload
      state.userPreference[item.id] = userValue
    }
  },
})

export const { setPreferenceTest, setPreference } = preferenceSlice.actions
export default preferenceSlice.reducer