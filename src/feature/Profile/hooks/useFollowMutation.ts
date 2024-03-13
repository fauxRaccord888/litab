import type { DeleteFollowingsMutation, InsertFollowingsMutation } from "$lib/graphql/__generated__/graphql"
import type { DBAuthUser } from "$feature/auth/type"
import { useCallback } from "react"
import { useMutation } from "@apollo/client"
import { getProfileByMutableId_QUERY, deleteFollowings_MUTATION, insertFollowings_MUTATION } from "../graphql"
import { getUserById_QUERY } from "$feature/auth/graphql"

const queryOption = (followerId: string, followingId: string) => ({
    variables: { followerId, followingId },
    refetchQueries: [
        getUserById_QUERY,
        getProfileByMutableId_QUERY
    ]
})

export function useFollowMutation(currentUser: DBAuthUser | null | undefined) {
    const [follow] = useMutation<InsertFollowingsMutation>(insertFollowings_MUTATION)
    const followHandler = useCallback((id: string) => {
        if (!currentUser || currentUser?.id === id) return
        follow(queryOption(currentUser.id, id))
    }, [follow, currentUser])

    const [unfollow] = useMutation<DeleteFollowingsMutation>(deleteFollowings_MUTATION)
    const unfollowHandler = useCallback((id: string) => {
        if (!currentUser || currentUser?.id === id) return
        unfollow(queryOption(currentUser.id, id))
    }, [unfollow, currentUser])

    return {
        follow: followHandler,
        unfollow: unfollowHandler
    }
}