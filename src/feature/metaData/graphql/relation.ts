import { graphql } from "$lib/graphql/__generated__"

export const insertOeuvresArtistsRelation_MUTATION = graphql(/* GraphQL */ `
    mutation insertOeuvresArtistsRelation(
        $metaId: UUID,
        $oeuvreId: UUID,
    ) {
        insertIntoOeuvresArtistsCollection(
            objects: {
                oeuvreId: $oeuvreId,
                artistId: $metaId,
            }
        ) {
            records {
                oeuvreId
            }
        }
    }
`)

export const insertOeuvresGenresRelation_MUTATION = graphql(/* GraphQL */ `
    mutation insertOeuvresGenresRelation(
        $metaId: UUID,
        $oeuvreId: UUID,
    ) {
        insertIntoOeuvresGenresCollection(
            objects: {
                oeuvreId: $oeuvreId,
                genreId: $metaId,
            }
        ) {
            records {
                oeuvreId
            }
        }
    }
`)

export const deleteOeuvresArtistsRelation_MUTATION = graphql(/* GraphQL */ `
    mutation deleteOeuvresArtistsRelation(
        $metaId: UUID,
        $oeuvreId: UUID,
    ) {
        deleteFromOeuvresArtistsCollection(
            filter: {
                oeuvreId: { eq: $oeuvreId },
                artistId: { eq: $metaId },
            }
        ) {
            records {
                oeuvreId
            }
        }
    }
`)


export const deleteOeuvresGenresRelation_MUTATION = graphql(/* GraphQL */ `
    mutation deleteOeuvresGenresRelation(
        $metaId: UUID,
        $oeuvreId: UUID,
    ) {
        deleteFromOeuvresGenresCollection(
            filter: {
                oeuvreId: { eq: $oeuvreId },
                genreId: { eq: $metaId },
            }
        ) {
            records {
                oeuvreId
            }
        }
    }
`)
