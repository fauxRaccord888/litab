import type { DBAuthUser } from "$feature/auth/type"
import { useFollowMutation } from ".."
import { calcFollowings } from "../../util"

export function useHandleFollow() {
    const {
        follow: followMutation,
        unfollow: unfollowMutation
    } = useFollowMutation()
    
    const handleFollow = (id: string, currentUser: DBAuthUser | null | undefined) => {
        const followings = calcFollowings(currentUser)
        const followed = followings.has(id)
    
        if (followed) unfollowMutation(id, currentUser)
        else followMutation(id, currentUser)
    }

    return handleFollow
}