import { graphql } from "$lib/graphql/__generated__"

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
