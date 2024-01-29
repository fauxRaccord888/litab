import { graphql } from "$lib/graphql/__generated__"

export const getUserById_GRAPHQL = graphql(/* GraphQL */ `
    query GetUserById($id: UUID!) {
        usersCollection(filter: { id: {eq: $id } }) {
            edges {
                node {
                    ...MiniProfile,
                }
            }
        }
    }
`)