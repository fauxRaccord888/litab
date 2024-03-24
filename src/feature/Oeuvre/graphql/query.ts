import { graphql } from "$lib/graphql/__generated__"

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
