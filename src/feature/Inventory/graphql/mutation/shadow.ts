import { graphql } from "$lib/graphql/__generated__"

export const insertShadows_MUTATION = graphql(/* GraphQL */ `
    mutation insertShadows(
        $userId: UUID,
        $name: String,
        $color: String
        $bodyLength: Float,
        $centeringFactor: Float,
        $matchingFactor: Float,
        $minDistance: Float,
        $avoidFactor: Float,
        $turnFactor: Float,
        $visualRange: Float,
        $speedLimit: Float
    ) {
        insertIntoShadowsCollection(
            objects: {
                userId: $userId
                name: $name
                color: $color
                bodyLength: $bodyLength
                centeringFactor: $centeringFactor
                matchingFactor: $matchingFactor
                minDistance: $minDistance
                avoidFactor: $avoidFactor
                turnFactor: $turnFactor
                visualRange: $visualRange
                speedLimit: $speedLimit
            }
        ) {
            records {
                ...ShadowsMinimalInfo
            }
        }
    }
`)

export const deleteShadows_MUTATION = graphql(/* GraphQL */ `
    mutation deleteShadows(
        $id: UUID,
    ) {
        deleteFromShadowsCollection(
            filter: {
                id: { eq: $id}
            }
        ) {
            records {
                ...ShadowsMinimalInfo
            }
        }
    }
`)

export const renameShadows_MUTATION = graphql(/* GraphQL */ `
    mutation renameShadows(
        $id: UUID,
        $name: String
    ) {
        updateShadowsCollection(
            filter: {
                id: { eq: $id}
            },
            set: {
                name: $name
            }
        ) {
            records {
                ...ShadowsMinimalInfo
            }
        }
    }
`)
