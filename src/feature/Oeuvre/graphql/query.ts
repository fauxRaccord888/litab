import { graphql } from "$lib/graphql/__generated__"

export const getOeuvreInfoById_QUERY = graphql(/* GraphQL */ `
    query getOeuvreInfoById(
        $id: UUID!
        $limit: Int,
        $cursor: Cursor
    ) {
        oeuvresCollection(
            first: 1,
            filter: { id: { eq: $id } }
        ) {
            edges {
                node {
                    ...OeuvresInfo
                }
            }
        }
    }
`)