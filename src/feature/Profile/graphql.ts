import { graphql } from "../../lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment MiniProfile on users {
        mutable_id,
        nickname,
        id
    }
`)

graphql(/* GraphQL */ `
    fragment FollowingsMiniProfile on usersConnection {
        edges {
            node {
              ...MiniProfile
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment PostsMiniData on postsConnection {
        edges {
            node {
                id
                title
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
        followers {
            ...FollowingsMiniProfile
        },
        followings {
            ...FollowingsMiniProfile
        },
        posts {
            ...PostsMiniData
        }
    }
`)

export const insertFollowingsMutation_QUERY = graphql(/* GraphQL */ `
    mutation insertFollowings($followerId:UUID!, $followingId:UUID!) {
        insertIntofollowingsCollection(
            objects: {
                follower_id: $followerId,
                following_id: $followingId
            }
        ) {
            records{
                follower_id,
                follower_id
            }
        }
    }
`)

export const deleteFollowingsMutation_QUERY = graphql(/* GraphQL */ `
    mutation deleteFollowings($followerId:UUID!, $followingId:UUID!) {
        deleteFromfollowingsCollection(
            filter : {
                following_id: {eq: $followingId },
                follower_id: {eq: $followerId}
            }
        ) {
            records {
                follower_id,
                follower_id
            }
        }
    }
`)

export const getProfileByMutableId_QUERY = graphql(/* GraphQL */ `
    query GetProfileByMutableId($mutableId: String!) {
        usersCollection(filter: { mutable_id: {eq: $mutableId } }) {
            edges {
                node {
                    ...ProfileData
                }
            }
        }
    }
`)