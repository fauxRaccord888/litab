import type { DeleteFollowingsMutation, InsertFollowingsMutation } from "$lib/graphql/__generated__/graphql"
import type { DBAuthUser } from "$feature/auth/types"
import { useCallback } from "react"
import { useMutation } from "@apollo/client"
import { deleteFollowings_MUTATION, insertFollowings_MUTATION } from "../graphql"
import { getUserById_QUERY } from "$feature/auth/graphql"
import { searchUsers_QUERY } from "$feature/search/graphql"
import { getFeedById_QUERY } from "$feature/feed/graphql"

const queryOption = (followerId: string, followingId: string) => ({
    variables: { followerId, followingId },
    refetchQueries: [
        getUserById_QUERY,
        searchUsers_QUERY,
        getFeedById_QUERY
    ]
})

export function useFollowMutation() {
    const [follow] = useMutation<InsertFollowingsMutation>(insertFollowings_MUTATION)
    const followHandler = useCallback((id: string, currentUser: DBAuthUser | null | undefined) => {
        if (!currentUser || currentUser?.id === id) return
        follow(queryOption(currentUser.id, id))
    }, [follow])

    const [unfollow] = useMutation<DeleteFollowingsMutation>(deleteFollowings_MUTATION)
    const unfollowHandler = useCallback((id: string, currentUser: DBAuthUser | null | undefined) => {
        if (!currentUser || currentUser?.id === id) return
        unfollow(queryOption(currentUser.id, id))
    }, [unfollow])

    return {
        follow: followHandler,
        unfollow: unfollowHandler
    }
}