import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment OeuvresInfo on oeuvres {
        id
        title
        description
        release_date
        oeuvres_artistsCollection {
            ...ArtistsInfo
        },
        oeuvres_genresCollection {
            ...GenresInfo
        }
    }
`)

graphql(/* GraphQL */ `
    fragment ArtistsInfo on oeuvres_artistsConnection {
        edges {
            node {
                artists {
                    id
                    name
                    birthdate
                    bio
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment GenresInfo on oeuvres_genresConnection {
        edges {
            node {
                genres {
                    id
                    name
                }
            }
        }
    }
`)
