import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface RegisterState {
  preferenceData: {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    data: {key: string, content: [string, string]}[]
  }  

  id: string,
  nickname: string,
  hashedPassword: string,
  email: string,
  userPreference: Record<string, boolean>
}

interface PreferencePayload {
    key: string,
    value: boolean
}

const initialState = { 
  id: '',
  nickname: '',
  hashedPassword: '',
  email: '',
  userPreference: {}, 

  preferenceData: {
    loading: 'idle',
    data: []
  }
} as RegisterState

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setPreference(state, action: PayloadAction<PreferencePayload>) {
        const { key, value } = action.payload
        state.userPreference[key] = value
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchPreferenceData.pending, (state) => {
      state.preferenceData.loading = 'pending'
    })
    builder.addCase(fetchPreferenceData.fulfilled, (state, action) => {
      state.preferenceData.data = action.payload
      state.preferenceData.loading = 'succeeded'
    })
    builder.addCase(fetchPreferenceData.rejected, (state) => {
      state.preferenceData.loading = 'failed'
    })

  }
})

export const fetchPreferenceData = createAsyncThunk(
  'register/fetchPreferenceData',
  // TODO fetch 수정
  async () => {
    const response = fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => response.slice(0, 10).map((o: {id: string, title: string, body: string}) => (
        {
          key: o.id,
          content: [o.title, o.body]
        }
      )))
    return response
  }
)

export const { setPreference } = registerSlice.actions
export default registerSlice.reducer