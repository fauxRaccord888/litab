import { graphql } from "$lib/graphql/__generated__"

export const getPentagramById_QUERY = graphql(/* GraphQL */ `
    query getPentagramById($id: UUID!) {
        pentagramsCollection(
            filter: { id: { eq: $id } }
        ) {
            ...PentagramsInfo
        }
    }
`)