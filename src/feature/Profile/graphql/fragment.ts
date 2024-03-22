import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment MiniProfile on users {
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
                    ...MiniProfile
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
                    ...MiniProfile
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment ProfileData on users {
        ...MiniProfile,
        description,
        nickname,
        preference,
        followersCollection {
            ...FollowersMiniProfile
        },
        followingsCollection {
            ...FollowingsMiniProfile
        }
        pentagramsCollection {
            edges {
                node {
                    ...PentagramsSelectInfo
                }
            }
        }
        pentagram_revisionsCollection {
            edges {
                node {
                    ...FeedInfo
                }
            }
        }
    }
`)