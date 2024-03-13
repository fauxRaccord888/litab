import type { DBAuthUser } from "$feature/auth/type";

export const calcFollowings = (
    currentUser: DBAuthUser | null | undefined,   
) => {
    if (!currentUser) return new Set()
    if (!currentUser.followingsCollection) return new Set()
    const followings= new Set(currentUser?.followingsCollection.edges.map((edge) => edge.node.following_id.id))
    return followings
}