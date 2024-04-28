import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment PentagramDecorationsMinimalInfo on PentagramDecorations {
        pentagramId
        decorationId
    }
`)

graphql(/* GraphQL */ `
    fragment PentagramDecorationsDecoInfo on PentagramDecorations {
        pentagramId
        decoration {
            ...DecorationsMinimalInfo
        }
    }
`)