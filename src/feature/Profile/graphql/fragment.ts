import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment MiniProfileInfo on Users {
        mutableId,
        nickname,
        id,
        updatedAt
    }
`)

graphql(/* GraphQL */ `
    fragment ProfilesInfo on Users {
        ...MiniProfileInfo,
        description,
        nickname,
        ...ProfileFollowInfo,
        ...ProfilePentagramInfo,
        ...ProfileRevisionInfo
    }
`)

graphql(/* GraphQL */ `
    fragment ProfileFollowInfo on Users {
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
    fragment ProfilePentagramInfo on Users {
        pentagramsCollection(
            orderBy: {
                createdAt: DescNullsLast
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
    fragment ProfileRevisionInfo on Users {
        pentagramRevisionsCollection(
            orderBy: {
                createdAt: DescNullsLast
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