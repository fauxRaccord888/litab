import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment ArtistsMinimalInfo on artists {
        id
        name
    }
`)

graphql(/* GraphQL */ `
    fragment ArtistsInfo on artists {
        ...ArtistsMinimalInfo
        abstract
        bio
    }
`)