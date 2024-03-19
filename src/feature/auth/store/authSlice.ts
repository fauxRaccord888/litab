import type { AppRootState } from '$lib/stores/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@supabase/supabase-js';
import { createSlice } from '@reduxjs/toolkit';
import { supabaseClient } from '$lib/supabase/client';



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        sessionUser: null as (User | null),
    },

    reducers: {
        setSession(state, action: PayloadAction<User>) {
            state.sessionUser = action.payload
        },

        signOut(state) {
            state.sessionUser = null
            supabaseClient.auth.signOut()
        },
    },
})

export type AuthState = AppRootState["auth"]
export const { setSession, signOut } = authSlice.actions
export default authSlice.reducer
