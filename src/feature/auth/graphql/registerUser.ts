import { graphql } from "$lib/graphql/__generated__"

export const registerUser_GRAPHQL = graphql(/* GraphQL */ `
    mutation registerUser($id: UUID!) {
        insertIntousersCollection(objects: [
            {id: $id},
        ]) {
            records {
                id
                mutable_id
            }
        }
    }
`)