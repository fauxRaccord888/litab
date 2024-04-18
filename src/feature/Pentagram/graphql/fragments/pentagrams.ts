import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment PentagramsUpdateInfo on Pentagrams {
        id
        description
        createdAt
        user {
            ...MiniProfileInfo
        }
        pentagramNodesCollection {
            edges {
                node {
                    ...PentagramNodesInfo
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment PentagramsSelectInfo on Pentagrams {
        id
        description
        createdAt
        user {
            ...MiniProfileInfo
        }
        pentagramNodesCollection {
            edges {
                node {
                    ...PentagramNodesInfo
                }
            }
        }
        pentagramRevisionsCollection(
            orderBy: { createdAt: DescNullsLast }
        ) {
            edges {
                node {
                    ...PentagramRevisionsMinimalInfo
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment PentagramsSelectUserInfo on Pentagrams {
        id
        user {
            ...MiniProfileInfo
        }
    }
`)