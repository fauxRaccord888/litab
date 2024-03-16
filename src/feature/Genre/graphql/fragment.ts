import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment GenresMinimalInfo on genres {
        id
        name
    }
`)

graphql(/* GraphQL */ `
    fragment GenresInfo on genres {
        ...GenresMinimalInfo,
        abstract
        description
    }
`)
