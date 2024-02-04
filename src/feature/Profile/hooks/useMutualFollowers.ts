/* types */
import type { FollowersMiniProfileFragment } from "$lib/graphql/__generated__/graphql"
/* hooks */
import { useMemo } from "react"
import { useUserData } from "$feature/auth/hooks/useUserData"
/* utils */
import { calcMutualFollowers } from "../util/calcMutualFollower"

export function useMutualFollowers( 
    targetId: string | null | undefined, 
    followersCollection: FollowersMiniProfileFragment | undefined | null 
) {
    const { user, followings } = useUserData()

    const mutualFollowers = useMemo(() => {
        if (!targetId || targetId === user?.id) return []
        return calcMutualFollowers(followersCollection, followings)
    }, [user, targetId, followersCollection, followings])

    return mutualFollowers
}
