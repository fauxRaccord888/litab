import { graphql } from "$lib/graphql/__generated__"

export const insertDecoration_MUTATION = graphql(/* GraphQL */ `
    mutation insertDecoration(
        $userId: UUID,
        $name: String,
        $seed: String
        $type: DecorationType
        $isBackground: Boolean
    ) {
        insertIntoDecorationsCollection(
            objects: {
                userId: $userId
                name: $name
                seed: $seed
                type: $type
                isBackground: $isBackground
            }
        ) {
            records {
                ...DecorationsMinimalInfo
            }
        }
    }
`)

export const deleteDecoration_MUTATION = graphql(/* GraphQL */ `
    mutation deleteDecoration(
        $id: UUID,
    ) {
        deleteFromDecorationsCollection(
            filter: {
                id: { eq: $id}
            }
        ) {
            records {
                ...DecorationsMinimalInfo
            }
        }
    }
`)

export const renameDecoration_MUTATION = graphql(/* GraphQL */ `
    mutation renameDecoration(
        $id: UUID,
        $name: String
    ) {
        updateDecorationsCollection(
            filter: {
                id: { eq: $id}
            },
            set: {
                name: $name
            }
        ) {
            records {
                ...DecorationsMinimalInfo
            }
        }
    }
`)
