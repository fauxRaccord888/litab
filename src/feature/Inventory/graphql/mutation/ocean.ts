import { graphql } from "$lib/graphql/__generated__"

export const insertOcean_MUTATION = graphql(/* GraphQL */ `
    mutation insertOcean(
        $userId: UUID,
        $name: String,
        $foamColor: String,
        $waterColor: String,
        $randomSeed: String,
        $foamThickness: Float,
        $mulScale: Float,
    ) {
        insertIntoOceanCollection(
            objects: {
                userId: $userId
                name: $name
                foamColor: $foamColor
                waterColor: $waterColor
                randomSeed: $randomSeed
                foamThickness: $foamThickness
                mulScale: $mulScale
            }
        ) {
            records {
                ...OceanMinimalInfo
            }
        }
    }
`)

export const deleteOcean_MUTATION = graphql(/* GraphQL */ `
    mutation deleteOcean(
        $id: UUID,
    ) {
        deleteFromOceanCollection(
            filter: {
                id: { eq: $id}
            }
        ) {
            records {
                ...OceanMinimalInfo
            }
        }
    }
`)

export const renameOcean_MUTATION = graphql(/* GraphQL */ `
    mutation renameOcean(
        $id: UUID,
        $name: String
    ) {
        updateOceanCollection(
            filter: {
                id: { eq: $id}
            },
            set: {
                name: $name
            }
        ) {
            records {
                ...OceanMinimalInfo
            }
        }
    }
`)
