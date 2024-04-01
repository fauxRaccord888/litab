import type { DeleteFollowingsMutation, InsertFollowingsMutation } from "$lib/graphql/__generated__/graphql"
import type { DBAuthUser } from "$feature/auth/types"
import { useCallback } from "react"
import { useMutation } from "@apollo/client"
import { deleteFollowings_MUTATION, getUserByMutableId_QUERY, insertFollowings_MUTATION } from "../graphql"
import { getUserById_QUERY } from "$feature/auth/graphql"
import { getFeedById_QUERY } from "$feature/feed/graphql"
import { evictCacheById } from "$lib/utils"

const queryOption = (followerId: string, followingId: string) => ({
    variables: { followerId, followingId },
    refetchQueries: [
        getUserById_QUERY,
        getUserByMutableId_QUERY,
        getFeedById_QUERY
    ]
})

export function useFollowMutation() {
    const [follow] = useMutation<InsertFollowingsMutation>(insertFollowings_MUTATION)
    const followHandler = useCallback((id: string, currentUser: DBAuthUser | null | undefined) => {
        if (!currentUser || currentUser?.id === id) return
        follow({
            ...queryOption(currentUser.id, id),
            update: (cache) => {
                evictCacheById({
                    cache,
                    entity: 'users', 
                    id: currentUser?.id
                })
            }
        })
    }, [follow])

    const [unfollow] = useMutation<DeleteFollowingsMutation>(deleteFollowings_MUTATION)
    const unfollowHandler = useCallback((id: string, currentUser: DBAuthUser | null | undefined) => {
        if (!currentUser || currentUser?.id === id) return
        unfollow({
            ...queryOption(currentUser.id, id),
            update: (cache) => {
                evictCacheById({
                    cache, 
                    entity: 'users', 
                    id: currentUser?.id
                })
            }
        })
    }, [unfollow])

    return {
        follow: followHandler,
        unfollow: unfollowHandler
    }
}