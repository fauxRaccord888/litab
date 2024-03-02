import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment MiniProfile on users {
        mutable_id,
        nickname,
        id
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
        },
    }
`)