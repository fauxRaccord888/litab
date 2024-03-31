import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment GenresMinimalInfo on genres {
        id
        name
        updated_at
    }
`)

graphql(/* GraphQL */ `
    fragment GenreOeuvresInfo on genres {
        oeuvres_genresCollection(
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
    fragment GenresInfo on genres {
        ...GenresMinimalInfo,
        ...GenreOeuvresInfo,
        abstract
        description
    }
`)