import { graphql } from "$lib/graphql/__generated__"

export const searchOeuvres_QUERY = graphql(/* GraphQL */ `
    query searchOeuvres($word: String!) {
        oeuvresCollection(
            filter: { title: { ilike: $word } }
        ) {
            edges {
                node {
                    ...OeuvresInfo
                }
            }
        }
    }
`)

export const getOeuvreExtensiveInfoById_QUERY = graphql(/* GraphQL */ `
    query getOeuvreExtensiveInfoById($id: UUID!) {
        oeuvresCollection(
            filter: { id: { eq: $id } }
        ) {
            edges {
                node {
                    ...OeuvresExtensiveInfo
                }
            }
        }
    }
`)
