import type { FollowersMiniProfileFragment } from "$lib/graphql/__generated__/graphql";

/** 시간 복잡도 주의 필요 */
export const calcMutualFollowers = (followers: FollowersMiniProfileFragment | null |undefined, followings: Set<string>) => {
    if (!followers || !followings) return []
    const mutualFollowers = followers.edges.filter((edge) => followings.has(edge.node.follower_id.id))
    return mutualFollowers
}