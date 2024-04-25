import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment InventoryInfo on Users {
        id,
        ...InventoryShadowsInfo
        ...InventoryOceanInfo
        ...InventoryCosmosInfo
    }
`)

graphql(/* GraphQL */ `
    fragment InventoryShadowsInfo on Users {
        shadowsCollection(
            orderBy: {
                createdAt: DescNullsLast
            }
            first: $shadowLimit
            after: $shadowCursor
        ) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                cursor
                node {
                    ...ShadowsMinimalInfo
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment InventoryOceanInfo on Users {
        oceanCollection(
            orderBy: {
                createdAt: DescNullsLast
            }
            first: $oceanLimit
            after: $oceanCursor
        ) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                cursor
                node {
                    ...OceanMinimalInfo
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment InventoryCosmosInfo on Users {
        cosmosCollection(
            orderBy: {
                createdAt: DescNullsLast
            }
            first: $cosmosLimit
            after: $cosmosCursor
        ) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                cursor
                node {
                    ...CosmosMinimalInfo
                }
            }
        }
    }
`)
