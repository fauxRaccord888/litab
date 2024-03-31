import { graphql } from "$lib/graphql/__generated__"

export const getArtistInfoById_QUERY = graphql(/* GraphQL */ `
    query getArtistInfoById(
        $id: UUID!
        $limit: Int,
        $cursor: Cursor        
    ) {
        artistsCollection(
            first: 1,
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
