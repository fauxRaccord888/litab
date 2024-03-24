import type { DBAuthUser } from "$feature/auth/types";
import type { DBProfiles } from "../types";
import { calcFollowings } from '.';

export const calcMutualFollowers = (
    currentUser: DBAuthUser | null | undefined,
    targetUser: DBProfiles | null, 
    followings: ReturnType<typeof calcFollowings>,
) => {
    if (!currentUser || !targetUser ) return []
    if (targetUser.id === currentUser.id) return []
    if (!targetUser.followersCollection || !followings) return []
    const followers = targetUser?.followersCollection.edges.map((edge) => edge.node)
    const mutualFollowers = followers.filter((node) => followings.has(node.follower_id.id))
    return mutualFollowers
}