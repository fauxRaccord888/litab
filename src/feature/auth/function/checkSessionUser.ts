import type { AppStore } from "$lib/stores/store"
import { supabaseClient } from "$lib/graphql/supabaseClient"
import { setSessionUser } from "$lib/stores/authSlice"

export async function checkSessionUser(payload: {
    store: AppStore
}) {
    const { store } = payload
    const { data } = await supabaseClient.auth.getSession()
    const sessionUser = data?.session?.user
    if (sessionUser) {
        store.dispatch(setSessionUser(sessionUser))
    }
    return sessionUser
}