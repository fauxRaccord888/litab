import { graphql } from "$lib/graphql/__generated__"

export const getGenreInfoById_QUERY = graphql(/* GraphQL */ `
    query getGenreInfoById($id: UUID!) {
        genresCollection(
            filter: { id: { eq: $id } }
        ) {
            edges {
                node {
                    ...GenresInfo
                }
            }
        }
    }
`)
