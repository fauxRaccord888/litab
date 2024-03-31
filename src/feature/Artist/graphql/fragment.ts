import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment ArtistsMinimalInfo on artists {
        id
        name
        updated_at
    }
`)

graphql(/* GraphQL */ `
    fragment ArtistOeuvresInfo on artists {
        oeuvres_artistsCollection(
            orderBy: {
                oeuvre_id: DescNullsLast
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
                    oeuvres {
                        ...OeuvresMinimalInfo
                    }
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment ArtistsInfo on artists {
        ...ArtistsMinimalInfo
        ...ArtistOeuvresInfo
        abstract
        bio
    }
`)