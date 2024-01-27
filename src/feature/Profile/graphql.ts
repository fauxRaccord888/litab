import { graphql } from "../../lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment MiniProfile on users {
        mutable_id,
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

export const getProfileByMutableId_QUERY = graphql(/* GraphQL */ `
    query GetProfileByMutableId($mutableId: String!) {
        usersCollection(filter: { mutable_id: {eq: $mutableId } }) {
            edges {
                node {
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
            }
        }
    }
`)