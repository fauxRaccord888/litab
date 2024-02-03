import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment OeuvresInfo on oeuvresConnection {
        edges {
            node {
                id
                title
                description
                release_date
                artists {
                    ...ArtistsInfo
                },
                genres {
                    ...GenresInfo
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment ArtistsInfo on artistsConnection {
        edges {
            node {
                id
                name
                birthdate
                bio
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment GenresInfo on genresConnection {
        edges {
            node {
                id
                name
            }
        }
    }
`)
