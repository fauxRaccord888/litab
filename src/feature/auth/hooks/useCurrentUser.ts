import type { GetUserByIdQuery } from "$lib/graphql/__generated__/graphql";
import type { AppRootState } from "$lib/stores/store";
import { useSelector, useStore } from "react-redux";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { checkUserAndStore } from "../utils";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";
import { getUserById_QUERY } from "../graphql";

export function useCurrentUser() {
    const store = useStore<AppRootState>()
    const { sessionUser } = useSelector((state: AppRootState) => state.auth )
    
    useEffect(() => {
        if (!sessionUser) {
            checkUserAndStore(store)
        }
    }, [sessionUser, store])
    
    const { data, loading } = useQuery<GetUserByIdQuery>(getUserById_QUERY, {
        variables: { id: sessionUser?.id ?? "" }
    })

    const currentUser = getFirstNodeOfCollection(data?.usersCollection)

    if (!sessionUser) return { loading, currentUser: null }
    return { loading, currentUser }
}