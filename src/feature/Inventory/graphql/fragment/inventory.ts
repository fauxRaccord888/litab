import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment InventoryInfo on Users {
        id,
        ...InventoryShadowsInfo
        ...InventoryWorleyInfo
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
    fragment InventoryWorleyInfo on Users {
        worleyCollection(
            orderBy: {
                createdAt: DescNullsLast
            }
            first: $worleyLimit
            after: $worleyCursor
        ) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                cursor
                node {
                    ...WorleyMinimalInfo
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
