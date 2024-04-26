import { graphql } from "$lib/graphql/__generated__";

export const getUserInventoryId_QUERY = graphql(/* GraphQL */ `
    query getUserInventoryById(
        $id: UUID!
        $isBackground: Boolean
        $limit: Int
        $cursor: Cursor
    ) {
        usersCollection(
            first: 1
            filter: { 
                id: { eq: $id },
            }
        ) {
            edges {
                node {
                    ...InventoryInfo
                }
            }
        }
    }
`)