import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment OeuvresMinimalInfo on oeuvres {
        id
        title
        updated_at
    }
`)

graphql(/* GraphQL */ `
      fragment OeuvrePentagramsInfo on oeuvres {
        pentagram_nodesCollection(
            orderBy: {
                created_at: DescNullsLast
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
                    pentagrams {
                        ...PentagramsSelectInfo
                    }
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment OeuvresInfo on oeuvres {
        ...OeuvresMinimalInfo
        ...OeuvrePentagramsInfo
        description
        oeuvres_artistsCollection {
            edges {
                node {
                    artists {
                        ...ArtistsMinimalInfo
                    }
                }
            }
        },
        oeuvres_genresCollection {
            edges {
                node {
                    genres {
                        ...GenresMinimalInfo
                    }
                }
            }
        }
    }
`)