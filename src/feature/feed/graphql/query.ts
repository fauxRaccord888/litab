import { graphql } from "$lib/graphql/__generated__"

export const getFeedById_QUERY = graphql(/* GraphQL */ `
    query GetFeedById(
        $id: UUID!,
        $limit: Int,
        $cursor: Cursor
    ) {
        feedCollection(filter: { id: {eq: $id } }) {
            edges {
                node {
                    id,
                    ...FeedInfo
                }
            }
        }
    }
`)

export const getFollowRecommendation_QUERY = graphql(/* GraphQL */ `
    query GetFollowRecommendation($id: UUID!) {
        feedCollection(filter: { id: {eq: $id } }) {
            edges {
                node {
                    ...FollowRecommendationInfo
                }
            }
        }
    }
`)