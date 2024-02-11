import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment OeuvresCollections on pentagrams_oeuvresConnection {
        edges {
            node {
                id
                index
                oeuvres {
                    ...OeuvresInfo
                }
            }
        }
    }
`)

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
                pentagrams_oeuvresCollection {
                    ...OeuvresCollections
                }
                pentagrams_nodesCollection {
                    ...PentagramsNodesInfo
                }
            }
        }
    }
`)