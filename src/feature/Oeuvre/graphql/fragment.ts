import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment OeuvresMinimalInfo on Oeuvres {
        id
        title
        updatedAt
    }
`)

graphql(/* GraphQL */ `
      fragment OeuvrePentagramsInfo on Oeuvres {
        pentagramNodesCollection(
            orderBy: {
                createdAt: DescNullsLast
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
                    pentagram {
                        ...PentagramsSelectInfo
                    }
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment OeuvresInfo on Oeuvres {
        ...OeuvresMinimalInfo
        ...OeuvrePentagramsInfo
        description
        oeuvresArtistsCollection {
            edges {
                node {
                    artist {
                        ...ArtistsMinimalInfo
                    }
                }
            }
        },
        oeuvresGenresCollection {
            edges {
                node {
                    genre {
                        ...GenresMinimalInfo
                    }
                }
            }
        }
    }
`)