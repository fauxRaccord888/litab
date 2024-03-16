import { graphql } from "$lib/graphql/__generated__"

export const searchArtists_QUERY = graphql(/* GraphQL */ `
    query searchArtists($word: String!) {
        artistsCollection(
            filter: { name: { ilike: $word } }
        ) {
            edges {
                node {
                    ...ArtistsInfo
                }
            }
        }
    }
`)

export const getArtistInfoById_QUERY = graphql(/* GraphQL */ `
    query getArtistInfoById($id: UUID!) {
        artistsCollection(
            filter: { id: { eq: $id } }
        ) {
            edges {
                node {
                    ...ArtistsInfo
                }
            }
        }
    }
`)
