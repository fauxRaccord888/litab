import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment GenresMinimalInfo on Genres {
        id
        name
        updatedAt
    }
`)

graphql(/* GraphQL */ `
    fragment GenreOeuvresInfo on Genres {
        oeuvresGenresCollection(
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
    fragment GenresInfo on Genres {
        ...GenresMinimalInfo,
        ...GenreOeuvresInfo,
        abstract
        description
    }
`)