import type { User } from "@supabase/supabase-js"
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client"
import type { RegisterUserMutation } from "$lib/graphql/__generated__/graphql"

import { registerUser_GRAPHQL } from "../graphql"
import { getFirstRecordOfResponse } from "$lib/utils/graphql"

/** Loader에서만 호출, 일반적으로는 Apollo Client의 useMutation 훅을 사용 */
export async function registerTableUser(payload: { 
    client: ApolloClient<NormalizedCacheObject>,
    sessionUser: User, 
}) {
    const { client, sessionUser } = payload
    const { data } = await client.mutate<RegisterUserMutation>({
        mutation: registerUser_GRAPHQL,
        variables: { id: sessionUser?.id }
    })

    const firstRecord = getFirstRecordOfResponse(data?.insertIntousersCollection)
    return firstRecord
}