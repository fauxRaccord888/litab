import { graphql } from "$lib/graphql/__generated__"


graphql(/* GraphQL */ `
    fragment ShadowsMinimalInfo on Shadows {
        id,
        userId
        name,
        color
        bodyLength
        centeringFactor
        matchingFactor
        minDistance
        avoidFactor
        turnFactor
        visualRange
        speedLimit
    }
`)