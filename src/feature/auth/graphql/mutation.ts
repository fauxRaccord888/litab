import { graphql } from "$lib/graphql/__generated__"

export const registerUser_MUTATION = graphql(/* GraphQL */ `
    mutation registerUser($id: UUID!) {
        insertIntousersCollection(objects: [
            {id: $id},
        ]) {
            records {
                ...AuthInfo
            }
        }
    }
`)