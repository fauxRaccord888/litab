import type { AppStore } from "$lib/stores/store";
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import type { GetUserByIdQuery } from "$lib/graphql/__generated__/graphql";
import { setSession } from "../store/authSlice";
import { supabaseClient } from "$lib/supabase/client";
import { getUserById_QUERY } from "../graphql";

export async function getUserObservable(store: AppStore, client: ApolloClient<NormalizedCacheObject>) {
    const state = store.getState()
    const { sessionUser } = state.auth
    let user = sessionUser
    
    if (!user) {
        const { data } = await supabaseClient.auth.getSession()
        user = data.session?.user || null
        if (!user) return null
        store.dispatch(setSession(user))
        const queryOption = { query: getUserById_QUERY, variables: { id: user.id } }
        client.query<GetUserByIdQuery>(queryOption)
    }

    const queryOption = { query: getUserById_QUERY, variables: { id: user.id } }

    const userObservable = client.watchQuery<GetUserByIdQuery>(queryOption)
    return userObservable
}