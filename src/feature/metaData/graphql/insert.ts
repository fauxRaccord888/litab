import { graphql } from "$lib/graphql/__generated__"

export const insertArtist_MUTATION = graphql(/* GraphQL */ `
    mutation insertArtists(
        $title: String,
        $description: String,
    ) {
        insertIntoArtistsCollection(
            objects: {
                name: $title,
                bio: $description,
            }
        ) {
            records {
                id,
            }
        }
    }
`)

export const insertOeuvres_MUTATION = graphql(/* GraphQL */ `
    mutation insertOeuvres(
        $title: String,
        $description: String,
    ) {
        insertIntoOeuvresCollection(
            objects: {
                title: $title,
                description: $description,
            }
        ) {
            records {
                id,
            }
        }
    }
`)

export const insertGenres_MUTATION = graphql(/* GraphQL */ `
    mutation insertGenres(
        $title: String,
        $description: String,
    ) {
        insertIntoGenresCollection(
            objects: {
                name: $title,
                description: $description
            }
        ) {
            records {
                id,
            }
        }
    }
`)
