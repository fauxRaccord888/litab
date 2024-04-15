import { graphql } from "$lib/graphql/__generated__"

export const updateArtist_MUTATION = graphql(/* GraphQL */ `
    mutation updateArtists(
        $id: UUID,
        $title: String,
        $description: String,
    ) {
        updateartistsCollection(
          	filter: {
              id: { eq: $id }
            }
            set: {
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

export const updateOeuvres_MUTATION = graphql(/* GraphQL */ `
    mutation updateOeuvres(
        $id: UUID,
        $title: String,
        $description: String,
    ) {
        updateoeuvresCollection(
          	filter: {
              id: { eq: $id }
            }
            set: {
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

export const updateGenres_MUTATION = graphql(/* GraphQL */ `
    mutation updateGenres(
        $id: UUID,
        $title: String,
        $description: String,
    ) {
        updategenresCollection(
          	filter: {
              id: { eq: $id }
            }
            set: {
                name: $title,
                description: $description,
            }
        ) {
            records {
                id,
            }
        }
    }
`)
