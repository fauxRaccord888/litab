import { graphql } from "$lib/graphql/__generated__"

export const insertPentagramRevision_MUTATION = graphql(/* GraphQL */ `
    mutation insertPentagramRevision(
        $input: [pentagram_revisionsInsertInput!]!
    ) {
        insertIntopentagram_revisionsCollection(
            objects: $input
        ) {
            affectedCount
            records {
                id
            }
        }
    }
`)
