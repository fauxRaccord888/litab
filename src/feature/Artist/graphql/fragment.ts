import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment ArtistsMinimalInfo on Artists {
        id
        name
        updatedAt
    }
`)

graphql(/* GraphQL */ `
    fragment ArtistOeuvresInfo on Artists {
        oeuvresArtistsCollection(
            orderBy: {
                oeuvreId: DescNullsLast
            }
            first: $limit
            after: $cursor
        ) {
          	pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                cursor
                node {
                    oeuvre {
                        ...OeuvresMinimalInfo
                    }
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment ArtistsInfo on Artists {
        ...ArtistsMinimalInfo
        ...ArtistOeuvresInfo
        abstract
        bio
    }
`)