import { graphql } from "$lib/graphql/__generated__";

export const getUserByMutableId_QUERY = graphql(/* GraphQL */ `
    query getUserByMutableId(
        $mutableId: String!
        $pentagramLimit: Int,
        $pentagramCursor: Cursor
        $revisionLimit: Int,
        $revisionCursor: Cursor
    ) {
        usersCollection  (
            first: 1
            filter: { mutableId: { eq: $mutableId } }
        ) {
            edges {
                node {
                    ...ProfilesInfo
                }
            }
        }
    }
`)