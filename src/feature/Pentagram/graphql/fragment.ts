import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment OeuvresCollections on pentagrams_oeuvresConnection {
        edges {
            node {
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
                oeuvres {
                    ...OeuvresInfo
                }
                angle
                distance
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment PentagramsInfo on pentagramsConnection {
        edges {
            node {
                id
                title
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