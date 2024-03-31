import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment MiniProfileInfo on users {
        mutable_id,
        nickname,
        id,
        updated_at
    }
`)

graphql(/* GraphQL */ `
    fragment ProfilesInfo on users {
        ...MiniProfileInfo,
        description,
        nickname,
        ...ProfileFollowInfo,
        ...ProfilePentagramInfo,
        ...ProfileRevisionInfo
    }
`)

graphql(/* GraphQL */ `
    fragment ProfileFollowInfo on users {
        followingsCollection {
            edges {
                node {
                    following_id {
                        ...MiniProfileInfo
                    }
                }
            }
        }
        followersCollection {
            edges {
                node {
                    follower_id {
                        ...MiniProfileInfo
                    }
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment ProfilePentagramInfo on users {
        pentagramsCollection(
            orderBy: {
                created_at: DescNullsLast
            }
            first: $pentagramLimit
            after: $pentagramCursor
        ) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                cursor
                node {
                    ...PentagramsSelectInfo
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment ProfileRevisionInfo on users {
        pentagram_revisionsCollection(
            orderBy: {
                created_at: DescNullsLast
            }
            first: $revisionLimit
            after: $revisionCursor
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