import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment PentagramsUpdateInfo on pentagrams {
        id
        description
        created_at
        users {
            ...MiniProfile
        }
        pentagram_nodesCollection {
            edges {
                node {
                    ...PentagramNodesMinimalInfo
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
            ...MiniProfile
        }
        pentagram_nodesCollection {
            edges {
                node {
                    ...PentagramNodesMinimalInfo
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