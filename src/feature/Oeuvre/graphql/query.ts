import { graphql } from "$lib/graphql/__generated__"

export const searchOeuvres_QUERY = graphql(/* GraphQL */ `
    query searchOeuvres($word: String!) {
        oeuvresCollection(
            filter: { title: { ilike: $word } }
        ) {
            ...OeuvresInfo
        }
    }
`)
