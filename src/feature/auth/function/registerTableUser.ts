import type { AppStore } from "$lib/stores/store"
import type { User } from "@supabase/supabase-js"
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client"
import type { RegisterUserMutation } from "$lib/graphql/__generated__/graphql"

import { setUser } from "$lib/stores/authSlice"
import { registerUser_GRAPHQL } from "../graphql"
import { getFirstRecordOfResponse } from "$lib/utils/graphql"

/** Loader에서만 호출, 일반적으로는 Apollo Client의 useMutation 훅을 사용 */
export async function registerTableUser(payload: { 
    store: AppStore, 
    client: ApolloClient<NormalizedCacheObject>,
    sessionUser: User, 
}) {
    const { store, client, sessionUser } = payload
    const { data } = await client.mutate<RegisterUserMutation>({
        mutation: registerUser_GRAPHQL,
        variables: { id: sessionUser?.id }
    })

    const firstRecord = getFirstRecordOfResponse(data?.insertIntousersCollection)
    if (firstRecord) store.dispatch(setUser(firstRecord))
    return firstRecord
}