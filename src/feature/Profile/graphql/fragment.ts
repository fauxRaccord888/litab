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
    fragment FollowingsMiniProfile on followingsConnection {
        edges {
            node {
                following_id {
                    ...MiniProfileInfo
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment FollowersMiniProfile on followingsConnection {
        edges {
            node {
                follower_id {
                    ...MiniProfileInfo
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment ProfilesInfo on users {
        ...MiniProfileInfo,
        description,
        nickname,
        followersCollection {
            ...FollowersMiniProfile
        },
        followingsCollection {
            ...FollowingsMiniProfile
        }
        pentagramsCollection(
            orderBy: {
                created_at: DescNullsLast
            }
        ) {
            edges {
                node {
                    ...PentagramsSelectInfo
                }
            }
        }
        pentagram_revisionsCollection(
            orderBy: {
                created_at: DescNullsLast
            }
        ) {
            edges {
                node {
                    ...FeedInfo
                }
            }
        }
    }
`)