import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment FeedInfo on feed {
        items (
            orderBy: {
                created_at: DescNullsLast
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
    fragment FollowRecommendationInfo on feed {
        recommendation {
            edges {
                node {
                    ...MiniProfileInfo
                }
            }
        }
    }
`)


