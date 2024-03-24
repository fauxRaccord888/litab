import { graphql } from "$lib/graphql/__generated__"

export const searchOeuvres_QUERY = graphql(/* GraphQL */ `
    query searchOeuvres($keyword: String!) {
        oeuvresCollection(
            filter: { title: { ilike: $keyword } }
        ) {
            edges {
                node {
                    ...OeuvresInfo
                }
            }
        }
    }
`)

export const searchUsers_QUERY = graphql(/* GraphQL */ `
    query searchUsers($keyword: String!) {
        usersCollection  (
            filter: { mutable_id: { ilike: $keyword } }
        ) {
            edges {
                node {
                    ...ProfilesInfo
                }
            }
        }
    }
`)

export const searchArtists_QUERY = graphql(/* GraphQL */ `
    query searchArtists($keyword: String!) {
        artistsCollection(
            filter: { name: { ilike: $keyword } }
        ) {
            edges {
                node {
                    ...ArtistsInfo
                }
            }
        }
    }
`)

export const searchGenres_QUERY = graphql(/* GraphQL */ `
    query searchGenres($keyword: String!) {
        genresCollection(
            filter: { name: { ilike: $keyword } }
        ) {
            edges {
                node {
                    ...GenresInfo
                }
            }
        }
    }
`)
