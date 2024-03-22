import type { User } from "@supabase/supabase-js";
import type { ApolloClient } from "@apollo/client";
import type { GetUserByIdQuery } from "$lib/graphql/__generated__/graphql";
import { getUserById_QUERY } from "../graphql";


export async function getUserObservable(user: User | null, client: ApolloClient<object>) {
    if (!user) return null

    const queryOption = { query: getUserById_QUERY, variables: { id: user.id } };
    client.query<GetUserByIdQuery>(queryOption);

    const userObservable = client.watchQuery<GetUserByIdQuery>(queryOption);
    return userObservable;
}
