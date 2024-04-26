import { graphql } from "$lib/graphql/__generated__"


graphql(/* GraphQL */ `
    fragment DecorationsMinimalInfo on Decorations {
        id,
        userId
        name,
        seed,
        type,
        isBackground
    }
`)