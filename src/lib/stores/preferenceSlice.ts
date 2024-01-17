import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { Tables } from '$lib/api/supabase/types';
import type { AppRootState } from './store';

import { getPreferenceTest_SERVER } from '$lib/api/preferenceTests';
import { updatePreference_SERVER } from '$lib/api/profiles';

import { getPreferencePayload } from '$lib/utils/getPreferencePayload';
import { supabaseClient } from '$lib/utils/supabase/client';

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
    // TODO - Redux 페이로드 전달 방식에 따른 오버헤드 가능성(값, 주소 확인 필요)
    setPreference(state, action: PayloadAction<PreferencePayload>) {
      const { item, userValue } = action.payload
      state.userPreference[item.id] = userValue
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPreferenceData.fulfilled, (state, action) => {
        state.preferenceData = action.payload
      })
  }
})

export const fetchPreferenceData = createAsyncThunk(
  'register/fetchPreferenceData',
  async() => {
    const data = await getPreferenceTest_SERVER(supabaseClient)
    return data
  }
)

export const requestUpdatePreference = createAsyncThunk(
  'register/updateUserPreference',
  async (_, { getState }) => {
    const { auth, preference } = getState() as AppRootState
    if (!auth.sessionUser) return null

    const payload = getPreferencePayload(preference.preferenceData, preference.userPreference)
    const data = await updatePreference_SERVER(payload, supabaseClient, auth.sessionUser.id)
    return data
  }
)

export const { setPreference } = preferenceSlice.actions
export default preferenceSlice.reducer