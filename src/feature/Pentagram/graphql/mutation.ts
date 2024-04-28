import { graphql } from "$lib/graphql/__generated__"

export const deletePentagram_MUTATION = graphql(/* GraphQL */ `
    mutation deletePentagram(
        $id: UUID,
    ) {
        deleteFromPentagramsCollection(
            filter: {
                id: { eq: $id }
            }
        ) {
            records {
                id,
            }
        }
    }
`)

export const removePentagramDecoration_MUTATION = graphql(/* GraphQL */ `
    mutation removePentagramDecoration(
        $pentagramId: UUID,
        $decorationId: UUID
    ) {
        deleteFromPentagramDecorationsCollection(
            filter: {
                pentagramId: { eq: $pentagramId }
                decorationId: { eq: $decorationId }
            }
        ) {
            records {
                ...PentagramDecorationsMinimalInfo
            }
        }
    }
`)

export const insertPentagramDecoration_MUTATION = graphql(/* GraphQL */ `
    mutation insertPentagramDecoration(
        $pentagramId: UUID,
        $decorationId: UUID
    ) {
        insertIntoPentagramDecorationsCollection(
            objects: {
                pentagramId: $pentagramId
                decorationId: $decorationId
            }
        ) {
            records {
                ...PentagramDecorationsMinimalInfo
            }
        }
    }
`)