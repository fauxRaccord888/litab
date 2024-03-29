import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment ArtistsMinimalInfo on artists {
        id
        name
        updated_at
    }
`)

graphql(/* GraphQL */ `
    fragment ArtistsInfo on artists {
        ...ArtistsMinimalInfo
        abstract
        bio
        oeuvres_artistsCollection {
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