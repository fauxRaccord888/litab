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
            }
        }
    }
`)