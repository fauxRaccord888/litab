import type { AppStore } from "$lib/stores/store"

import { supabaseClient } from "$lib/supabase/client"
import { setSessionUser } from "$lib/stores/authSlice"

export async function checkSessionUser(payload: {
    store: AppStore
}) {
    const { store } = payload
    const { auth } = store.getState()
    const { data } = await supabaseClient.auth.getSession()
    const sessionUser = data?.session?.user
    if (sessionUser && sessionUser !== auth.sessionUser) {
        store.dispatch(setSessionUser(sessionUser))
    }
    return sessionUser
}