import { useFollowMutation } from ".."
import { calcFollowings } from "../../util"
import { useCurrentUser } from "$feature/auth/hooks";

export function useHandleFollow() {
    const {
        follow: followMutation,
        unfollow: unfollowMutation
    } = useFollowMutation()
    const currentUser = useCurrentUser()
    
    const handleFollow = async (id: string) => {
        const followings = calcFollowings(currentUser)
        const followed = followings.has(id)
    
        if (followed) unfollowMutation(id, currentUser)
        else followMutation(id, currentUser)
    }

    return handleFollow
}