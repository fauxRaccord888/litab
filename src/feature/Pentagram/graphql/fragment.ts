import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment PentagramsNodesInfo on pentagrams_nodesConnection {
        edges {
            node {
                id
                angle
                distance
                oeuvres {
                    ...OeuvresInfo
                }
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment PentagramsInfo on pentagramsConnection {
        edges {
            node {
                id
                description
                created_at
                users {
                    ...MiniProfile
                }
                pentagrams_nodesCollection {
                    ...PentagramsNodesInfo
                }
            }
        }
    }
`)