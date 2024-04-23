import { graphql } from "$lib/graphql/__generated__"

export const insertWorley_MUTATION = graphql(/* GraphQL */ `
    mutation insertWorley(
        $userId: UUID,
        $name: String,
        $color: String
        $gridCount: Int,
        $movementParam: Float,
        $limit: Int
    ) {
        insertIntoWorleyCollection(
            objects: {
                userId: $userId
                name: $name
                color: $color
                gridCount: $gridCount,
                movementParam: $movementParam,
                limit: $limit
            }
        ) {
            records {
                ...WorleyMinimalInfo
            }
        }
    }
`)

export const deleteWorley_MUTATION = graphql(/* GraphQL */ `
    mutation deleteWorley(
        $id: UUID,
    ) {
        deleteFromWorleyCollection(
            filter: {
                id: { eq: $id}
            }
        ) {
            records {
                ...WorleyMinimalInfo
            }
        }
    }
`)

export const renameWorley_MUTATION = graphql(/* GraphQL */ `
    mutation renameWorley(
        $id: UUID,
        $name: String
    ) {
        updateWorleyCollection(
            filter: {
                id: { eq: $id}
            },
            set: {
                name: $name
            }
        ) {
            records {
                ...WorleyMinimalInfo
            }
        }
    }
`)
