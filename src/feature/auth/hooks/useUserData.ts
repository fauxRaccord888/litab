import type { AppRootState } from "$lib/stores/store";
import type { GetUserByIdQuery } from "$lib/graphql/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { getUserById_QUERY } from "../graphql";
import { useMemo } from "react";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";

export function useUserData() {
    const { sessionUser } = useSelector((state: AppRootState) => state.auth)
    const { data, loading, error } = useQuery<GetUserByIdQuery>(getUserById_QUERY, {
        variables: {
            id: sessionUser?.id
        }
    })
    
    const user = useMemo(() => {
        return getFirstNodeOfCollection(data?.usersCollection)
    }, [data])

    const followings = useMemo(() => {
        return new Set(user?.followingsCollection?.edges.map((edge) => edge.node.following_id.id))
    }, [user?.followingsCollection])

    return { user, followings, loading, error }
}