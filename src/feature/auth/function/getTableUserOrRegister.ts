import type { User } from "@supabase/supabase-js";
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client"
import type { GetUserByIdQuery, RegisterUserMutation } from "$lib/graphql/__generated__/graphql"
import { getFirstNodeOfCollection, getFirstRecordOfResponse } from "$lib/utils/graphql"
import { getUserById_QUERY, registerUser_MUTATION } from '../graphql';

export async function getTableUserOrRegister(payload: {
    sessionUser: User | null | undefined,
    apolloClient: ApolloClient<NormalizedCacheObject>
}) {
    const { sessionUser, apolloClient } = payload
    if (!sessionUser) return null
    
    const queryOption = { query: getUserById_QUERY, variables: { id: sessionUser.id } }
    const tableUserResponse = await apolloClient.query<GetUserByIdQuery>(queryOption)
    const tableUser = getFirstNodeOfCollection(tableUserResponse?.data?.usersCollection)
    if (tableUser) return tableUser

    const registerUserResponse = await apolloClient.mutate<RegisterUserMutation>({
        mutation: registerUser_MUTATION,
        variables: { id: sessionUser.id }
    })
    const registeredUser = getFirstRecordOfResponse(registerUserResponse?.data?.insertIntousersCollection)
    if (registeredUser) return registeredUser
    // TODO THROW ERROR + HANDLER
    return null
}