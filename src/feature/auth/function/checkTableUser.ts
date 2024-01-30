import type { AppStore } from "$lib/stores/store"
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client"
import type { GetUserByIdQuery } from "$lib/graphql/__generated__/graphql"

import { setUser } from "$lib/stores/authSlice"
import { getUserById_GRAPHQL } from "../graphql"
import { getFirstNodeOfCollection } from "$lib/utils/graphql"

export async function checkTableUser(payload: { 
    store: AppStore, 
    client: ApolloClient<NormalizedCacheObject>,
}) {
    const { store, client } = payload
    const { auth } = store.getState()
    if (auth.user && auth.user.id === auth.sessionUser?.id) return auth.user

    const { data } = await client.query<GetUserByIdQuery>({
        query: getUserById_GRAPHQL,
        variables: { id: auth.sessionUser?.id }
    })
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)
    store.dispatch(setUser(firstNode))
    return firstNode
}