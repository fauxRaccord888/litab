import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment GenresMinimalInfo on genres {
        id
        name
        updated_at
    }
`)

graphql(/* GraphQL */ `
    fragment GenresInfo on genres {
        ...GenresMinimalInfo,
        abstract
        description
        oeuvres_genresCollection {
            edges {
                node {
                    oeuvres {
                        ...OeuvresMinimalInfo
                    }
                }
            }
        }
    }
`)
