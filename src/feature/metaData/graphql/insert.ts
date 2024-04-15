import { graphql } from "$lib/graphql/__generated__"

export const insertArtist_MUTATION = graphql(/* GraphQL */ `
    mutation insertArtists(
        $title: String,
        $description: String,
    ) {
        insertIntoartistsCollection(
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
        insertIntooeuvresCollection(
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
        insertIntogenresCollection(
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
