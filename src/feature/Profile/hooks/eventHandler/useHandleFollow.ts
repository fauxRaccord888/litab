import { useCurrentUser } from "$feature/auth/hooks/useCurrentUser"
import { useFollowMutation } from ".."
import { useApolloClient } from "@apollo/client";
import { getCurrentUserFromObservable, getUserObservable } from "$feature/auth/utils"
import { calcFollowings } from "../../util"

export function useHandleFollow() {
    const {
        follow: followMutation,
        unfollow: unfollowMutation
    } = useFollowMutation()
    const currentUser = useCurrentUser()
    const apolloClient = useApolloClient()
    
    const handleFollow = async (id: string) => {
        const userObservable = await getUserObservable(currentUser, apolloClient)
        const currentUserInfo = getCurrentUserFromObservable(userObservable)
        const followings = calcFollowings(currentUserInfo)
        const followed = followings.has(id)
    
        if (followed) unfollowMutation(id, currentUserInfo)
        else followMutation(id, currentUserInfo)
    }

    return handleFollow
}