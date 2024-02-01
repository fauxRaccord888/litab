import type { AppStore } from "$lib/stores/store"
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client"
import type { GetUserByIdQuery } from "$lib/graphql/__generated__/graphql"

import { getUserById_QUERY } from "../graphql"
import { getFirstNodeOfCollection } from "$lib/utils/graphql"

export async function checkTableUser(payload: { 
    store: AppStore, 
    client: ApolloClient<NormalizedCacheObject>,
}) {
    const { store, client } = payload
    const { auth } = store.getState()
    const { data } = await client.query<GetUserByIdQuery>({
        query: getUserById_QUERY,
        variables: { id: auth.sessionUser?.id }
    })
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)
    return firstNode
}