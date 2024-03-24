import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment PentagramsUpdateInfo on pentagrams {
        id
        description
        created_at
        users {
            ...MiniProfileInfo
        }
        pentagram_nodesCollection {
            edges {
                node {
                    ...PentagramNodesInfo
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment PentagramsSelectInfo on pentagrams {
        id
        description
        created_at
        users {
            ...MiniProfileInfo
        }
        pentagram_nodesCollection {
            edges {
                node {
                    ...PentagramNodesInfo
                }
            }
        }
        pentagram_revisionsCollection(
            orderBy: { created_at: DescNullsLast }
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
    fragment PentagramsSelectUserInfo on pentagrams {
        id
        users {
            ...MiniProfileInfo
        }
    }
`)