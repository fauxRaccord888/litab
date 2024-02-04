import { graphql } from "$lib/graphql/__generated__"

export const insertFollowings_MUTATION = graphql(/* GraphQL */ `
    mutation insertFollowings($followerId:UUID!, $followingId:UUID!) {
        insertIntofollowingsCollection(
            objects: {
                follower_id: $followerId,
                following_id: $followingId
            }
        ) {
            records{
                follower_id { id },
                follower_id { id }
            }
        }
    }
`)

export const deleteFollowings_MUTATION = graphql(/* GraphQL */ `
    mutation deleteFollowings($followerId:UUID!, $followingId:UUID!) {
        deleteFromfollowingsCollection(
            filter : {
                following_id: {eq: $followingId },
                follower_id: {eq: $followerId}
            }
        ) {
            records {
                follower_id { id },
                follower_id { id }
            }
        }
    }
`)