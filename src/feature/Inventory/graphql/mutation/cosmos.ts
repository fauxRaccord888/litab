import { graphql } from "$lib/graphql/__generated__"

export const insertCosmos_MUTATION = graphql(/* GraphQL */ `
    mutation insertCosmos(
        $userId: UUID,
        $name: String,
        $shootingStarColors: [String]
        $starCount: Int,
        $shootingStarCount: Int
        $speedParam: Float,
        $sizeParam: Float,
    ) {
        insertIntoCosmosCollection(
            objects: {
                userId: $userId
                name: $name
                shootingStarColors: $shootingStarColors
                shootingStarCount: $shootingStarCount
                starCount: $starCount
                speedParam: $speedParam
                sizeParam: $sizeParam
            }
        ) {
            records {
                ...CosmosMinimalInfo
            }
        }
    }
`)

export const deleteCosmos_MUTATION = graphql(/* GraphQL */ `
    mutation deleteCosmos(
        $id: UUID,
    ) {
        deleteFromCosmosCollection(
            filter: {
                id: { eq: $id}
            }
        ) {
            records {
                ...CosmosMinimalInfo
            }
        }
    }
`)

export const renameCosmos_MUTATION = graphql(/* GraphQL */ `
    mutation renameCosmos(
        $id: UUID,
        $name: String
    ) {
        updateCosmosCollection(
            filter: {
                id: { eq: $id}
            },
            set: {
                name: $name
            }
        ) {
            records {
                ...CosmosMinimalInfo
            }
        }
    }
`)
