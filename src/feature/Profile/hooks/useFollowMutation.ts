import type { DeleteFollowingsMutation, InsertFollowingsMutation } from "$lib/graphql/__generated__/graphql"
import type { MutationResult } from "@apollo/client"
import { useCallback } from "react"
import { useMutation } from "@apollo/client"
import { useUserData } from "$feature/auth/hooks/useUserData"
import { deleteFollowingsMutation_QUERY, getProfileByMutableId_QUERY, insertFollowingsMutation_QUERY } from "../graphql"
import { getUserById_QUERY } from "$feature/auth/graphql"

type Handler = (id: string) => void

const queryOption = (followerId: string, followingId: string) => ({
    variables: { followerId, followingId },
    refetchQueries: [
        getUserById_QUERY,
        getProfileByMutableId_QUERY
    ]
})

export function useFollowMutation(): Record<string, [Handler, MutationResult]> {
    const { user } = useUserData()

    const [follow, followStatus] = useMutation<InsertFollowingsMutation>(insertFollowingsMutation_QUERY)
    const followHandler = useCallback((id: string) => {
        if (!user || user?.id === id) return
        follow(queryOption(user.id, id))
    }, [follow, user])

    const [unfollow, unfollowStatus] = useMutation<DeleteFollowingsMutation>(deleteFollowingsMutation_QUERY)
    const unfollowHandler = useCallback((id: string) => {
        if (!user || user?.id === id) return
        unfollow(queryOption(user.id, id))
    }, [unfollow, user])

    return {
        follow: [followHandler, followStatus],
        unfollow: [unfollowHandler, unfollowStatus]
    }
}