import { graphql } from "$lib/graphql/__generated__"

export const getFeedById_QUERY = graphql(/* GraphQL */ `
    query GetFeedById($id: UUID!) {
        usersCollection(filter: { id: {eq: $id } }) {
            edges {
                node {
                    id,
                    feed (orderBy: {
                        created_at: DescNullsLast
                    }) {
                        edges {
                            node {
                                ...FeedInfo
                            }
                        }
                    }
                }
            }
        }
    }
`)

export const getFollowRecommendation_QUERY = graphql(/* GraphQL */ `
    query GetFollowRecommendation($id: UUID!) {
        usersCollection(filter: { id: {eq: $id } }) {
            edges {
                node {
                    recommendation {
                        edges {
                            node {
                                ...ProfilesInfo
                            }
                        }
                    }
                }
            }
        }
    }
`)