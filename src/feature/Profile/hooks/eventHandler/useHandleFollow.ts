import type { DBAuthUser } from "$feature/auth/type"
import { useFollowMutation } from ".."
import { calcFollowings } from "../../util"

export function useHandleFollow(id: string, currentUser: DBAuthUser | null | undefined) {
    const followings = calcFollowings(currentUser)
    const followed = followings.has(id)

    const {
        follow: followMutation,
        unfollow: unfollowMutation
    } = useFollowMutation(currentUser)
    
    const handleFollow = () => {
        if (followed) unfollowMutation(id)
        else followMutation(id)
    }

    return handleFollow
}