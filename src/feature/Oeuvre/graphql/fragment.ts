import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment OeuvresMinimalInfo on oeuvres {
        id
        title
    }
`)

graphql(/* GraphQL */ `
    fragment OeuvresInfo on oeuvres {
        ...OeuvresMinimalInfo
        description
        oeuvres_artistsCollection {
            edges {
                node {
                    artists {
                        ...ArtistsMinimalInfo
                    }
                }
            }
        },
        oeuvres_genresCollection {
            edges {
                node {
                    genres {
                        ...GenresMinimalInfo
                    }
                }
            }
        }
    }
`)


graphql(/* GraphQL */ `
    fragment OeuvresExtensiveInfo on oeuvres {
        ...OeuvresInfo
        pentagram_nodesCollection {
            edges {
                node {
                    pentagrams {
                        ...PentagramsSelectInfo
                    }
                }
            }
        }

    }
`)