import { graphql } from "$lib/graphql/__generated__"

export const searchPentagrams_QUERY = graphql(/* GraphQL */ `
    query searchPentagrams($word: String!) {
        pentagramsCollection(
            filter: { title: { ilike: $word } }
        ) {
            ...PentagramsInfo
        }
    }
`)

export const getPentagramById_QUERY = graphql(/* GraphQL */ `
    query getPentagramById($id: UUID!) {
        pentagramsCollection(
            filter: { id: { eq: $id } }
        ) {
            ...PentagramsInfo
        }
    }
`)