import { graphql } from "$lib/graphql/__generated__"

export const insertFollowings_MUTATION = graphql(/* GraphQL */ `
    mutation insertFollowings($followerId:UUID!, $followingId:UUID!) {
        insertIntoFollowingsCollection(
            objects: {
                followerId: $followerId,
                followingId: $followingId
            }
        ) {
            records{
                followerId,
                followingId
            }
        }
    }
`)

export const deleteFollowings_MUTATION = graphql(/* GraphQL */ `
    mutation deleteFollowings($followerId:UUID!, $followingId:UUID!) {
        deleteFromFollowingsCollection(
            filter : {
                followingId: {eq: $followingId },
                followerId: {eq: $followerId}
            }
        ) {
            records {
                followerId,
                followingId
            }
        }
    }
`)