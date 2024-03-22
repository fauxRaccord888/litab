import type { AppStore } from "$lib/stores/store";
import { supabaseClient } from "$lib/supabase";
import { setSession } from "../store/authSlice";

export async function checkUserAndStore(store: AppStore) {
    const { data } = await supabaseClient.auth.getSession();
    const user = data.session?.user || null
    if (!user) return null
    store.dispatch(setSession(user));
    return user
}