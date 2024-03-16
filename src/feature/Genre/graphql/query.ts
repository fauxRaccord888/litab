import { graphql } from "$lib/graphql/__generated__"

export const searchGenres_QUERY = graphql(/* GraphQL */ `
    query searchGenres($word: String!) {
        genresCollection(
            filter: { name: { ilike: $word } }
        ) {
            edges {
                node {
                    ...GenresInfo
                }
            }
        }
    }
`)

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
