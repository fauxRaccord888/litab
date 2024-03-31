import type { GetFeedByIdQuery, GetFollowRecommendationQuery } from "$lib/graphql/__generated__/graphql";
import { useCallback, useEffect, useMemo } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useCurrentUser } from "$feature/auth/hooks/useCurrentUser";
import { getFeedById_QUERY, getFollowRecommendation_QUERY } from "../graphql";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";
import { NETWORK } from "$lib/constants";

export function useFeed() {
    const currentUser = useCurrentUser()
    const { data, fetchMore } = useQuery<GetFeedByIdQuery>(getFeedById_QUERY, {
        variables: { 
            id: currentUser?.id,
            limit: NETWORK.readLimit
        }
    })
    const [queryFollowRecommendation, {data: recommendData}] = useLazyQuery<GetFollowRecommendationQuery>(getFollowRecommendation_QUERY)
    
    const hasNextPage = getFirstNodeOfCollection(data?.feedCollection)?.items?.pageInfo.hasNextPage

    const feed = useMemo(() => {
        const feedData = getFirstNodeOfCollection(data?.feedCollection)
        if (!feedData) return null
        const feedItems = feedData?.items
        if (feedItems?.edges.length) return feedData
    }, [data])

    const recommendedUsers = useMemo(() => {
        const feed = getFirstNodeOfCollection(recommendData?.feedCollection)
        if (!feed) return null
        const recommendation = feed.recommendation
        return recommendation?.edges.map((edge) => edge.node)
    }, [recommendData?.feedCollection])

    const fetchMoreFeed = useCallback(() => {
        const feed = getFirstNodeOfCollection(data?.feedCollection)
        fetchMore({
            variables: { 
                id: currentUser?.id,
                limit: NETWORK.readLimit,
                cursor: feed?.items?.pageInfo.endCursor
            }    
        })
    }, [currentUser?.id, data?.feedCollection, fetchMore])

    useEffect(() => {
        if (!feed && data) {
            queryFollowRecommendation()
        }
    }, [data, feed, queryFollowRecommendation])

    return { feed, recommendedUsers, hasNextPage, fetchMoreFeed }
}