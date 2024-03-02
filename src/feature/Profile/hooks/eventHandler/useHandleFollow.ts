import { useCheckFollowed, useFollowMutation } from ".."

export function useHandleFollow(id: string) {
    const followed = useCheckFollowed(id)
    const {
        follow: [followMutation],
        unfollow: [unfollowMutation]
    } = useFollowMutation()
    
    const handleFollow = () => {
        if (followed) unfollowMutation(id)
        else followMutation(id)
    }

    return handleFollow
}