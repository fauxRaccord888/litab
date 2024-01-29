import type { AppStore } from "$lib/stores/store"
import type { User } from "@supabase/supabase-js"
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client"
import type { GetUserByIdQuery } from "$lib/graphql/__generated__/graphql"

import { setUser } from "$lib/stores/authSlice"
import { getUserById_GRAPHQL } from "../graphql"
import { getFirstNodeOfCollection } from "$lib/utils/graphql"

export async function checkTableUser(payload: { 
    store: AppStore, 
    client: ApolloClient<NormalizedCacheObject>,
    sessionUser: User, 
}) {
    const { store, client, sessionUser } = payload
    const { data } = await client.query<GetUserByIdQuery>({
        query: getUserById_GRAPHQL,
        variables: { id: sessionUser?.id }
    })
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)
    if (firstNode) store.dispatch(setUser(firstNode))
    return firstNode
}