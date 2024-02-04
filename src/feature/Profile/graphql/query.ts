import { graphql } from "$lib/graphql/__generated__"

export const getProfileByMutableId_QUERY = graphql(/* GraphQL */ `
    query GetProfileByMutableId($mutableId: String!) {
        usersCollection(filter: { mutable_id: {eq: $mutableId } }) {
            edges {
                node {
                    ...ProfileData
                }
            }
        }
    }
`)