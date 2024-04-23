import { graphql } from "$lib/graphql/__generated__";

export const getUserInventoryId_QUERY = graphql(/* GraphQL */ `
    query getUserInventoryById(
        $id: UUID!
        $shadowLimit: Int,
        $shadowCursor: Cursor
        $cosmosLimit: Int,
        $cosmosCursor: Cursor
        $worleyLimit: Int,
        $worleyCursor: Cursor
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