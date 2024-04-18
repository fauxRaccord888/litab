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