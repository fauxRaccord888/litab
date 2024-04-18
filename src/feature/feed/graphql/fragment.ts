import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment FeedInfo on Feed {
        items (
            orderBy: {
                createdAt: DescNullsLast
            }
            first: $limit
            after: $cursor
        ) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
              	cursor
                node {
                    ...PentagramRevisionFeedInfo
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment FollowRecommendationInfo on Feed {
        recommendation {
            edges {
                node {
                    ...MiniProfileInfo
                }
            }
        }
    }
`)


