import type { GetFeedByIdQuery, GetFollowRecommendationQuery } from "$lib/graphql/__generated__/graphql";
import { useEffect, useMemo } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useCurrentUser } from "$feature/auth/hooks/useCurrentUser";
import { getFeedById_QUERY, getFollowRecommendation_QUERY } from "../graphql";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";

export function useFeed() {
    const currentUser = useCurrentUser()
    const { data } = useQuery<GetFeedByIdQuery>(getFeedById_QUERY, {
        variables: { id: currentUser?.id }
    })
    const [queryFollowRecommendation, {data: recommendData}] = useLazyQuery<GetFollowRecommendationQuery>(getFollowRecommendation_QUERY)
    
    const feed = useMemo(() => {
        const user = getFirstNodeOfCollection(data?.usersCollection)
        if (!user) return null
        const feed = user?.feed
        if (feed?.edges.length) return feed
    }, [data])

    const recommendedUsers = useMemo(() => {
        const user = getFirstNodeOfCollection(recommendData?.usersCollection)
        if (!user) return null
        const recommendation = user.recommendation
        return recommendation?.edges.map((edge) => edge.node)
    }, [recommendData?.usersCollection])

    useEffect(() => {
        if (!feed && data) {
            queryFollowRecommendation()
        }
    }, [feed, data, queryFollowRecommendation])

    return { feed, recommendedUsers }
}