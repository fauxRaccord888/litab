import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment InventoryInfo on Users {
        id,
        ...InventoryDecorationsInfo
    }
`)

graphql(/* GraphQL */ `
    fragment InventoryDecorationsInfo on Users {
        decorationsCollection(
            orderBy: {
                createdAt: DescNullsLast
            }
            filter: {
                isBackground: {
                    eq: $isBackground
                }
            }
            first: $limit
            after: $cursor
        ) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                cursor
                node {
                    ...DecorationsMinimalInfo
                }
            }
        }
    }
`)
