import { graphql } from "$lib/graphql/__generated__"

export const insertOeuvresArtistsRelation_MUTATION = graphql(/* GraphQL */ `
    mutation insertOeuvresArtistsRelation(
        $metaId: UUID,
        $oeuvreId: UUID,
    ) {
        insertIntooeuvres_artistsCollection(
            objects: {
                oeuvre_id: $oeuvreId,
                artist_id: $metaId,
            }
        ) {
            records {
                oeuvre_id
            }
        }
    }
`)

export const insertOeuvresGenresRelation_MUTATION = graphql(/* GraphQL */ `
    mutation insertOeuvresGenresRelation(
        $metaId: UUID,
        $oeuvreId: UUID,
    ) {
        insertIntooeuvres_genresCollection(
            objects: {
                oeuvre_id: $oeuvreId,
                genre_id: $metaId,
            }
        ) {
            records {
                oeuvre_id
            }
        }
    }
`)

export const deleteOeuvresArtistsRelation_MUTATION = graphql(/* GraphQL */ `
    mutation deleteOeuvresArtistsRelation(
        $metaId: UUID,
        $oeuvreId: UUID,
    ) {
        deleteFromoeuvres_artistsCollection(
            filter: {
                oeuvre_id: { eq: $oeuvreId },
                artist_id: { eq: $metaId },
            }
        ) {
            records {
                oeuvre_id
            }
        }
    }
`)


export const deleteOeuvresGenresRelation_MUTATION = graphql(/* GraphQL */ `
    mutation deleteOeuvresGenresRelation(
        $metaId: UUID,
        $oeuvreId: UUID,
    ) {
        deleteFromoeuvres_genresCollection(
            filter: {
                oeuvre_id: { eq: $oeuvreId },
                genre_id: { eq: $metaId },
            }
        ) {
            records {
                oeuvre_id
            }
        }
    }
`)
