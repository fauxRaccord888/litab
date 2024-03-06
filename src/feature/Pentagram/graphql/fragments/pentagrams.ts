import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment PentagramsUpdateInfo on pentagramsConnection {
        edges {
            node {
                id
                description
                created_at
                users {
                    ...MiniProfile
                }
                pentagram_nodesCollection {
                    ...PentagramNodesInfo
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment PentagramsSelectSingleInfo on pentagrams {
        id
        description
        created_at
        users {
            ...MiniProfile
        }
        pentagram_nodesCollection {
            ...PentagramNodesInfo
        }
        pentagram_revisionsCollection(
            orderBy: { created_at: DescNullsLast }
        ) {
            ...PentagramRevisionsInfo                
        }
    }
`)
graphql(/* GraphQL */ `
    fragment PentagramsSelectInfo on pentagramsConnection {
        edges {
            node {
                ...PentagramsSelectSingleInfo
            }
        }
    }
`)