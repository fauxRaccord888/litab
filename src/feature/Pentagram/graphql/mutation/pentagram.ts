import { graphql } from "$lib/graphql/__generated__"
  
export const insertPenagram_MUTATION = graphql(/* GraphQL */ `
    mutation insertPentagram(
        $input: [pentagramsInsertInput!]!
    ) {
        insertIntopentagramsCollection(
            objects: $input
        ) {
            affectedCount
            records {
                id
            }
        }
    }
`)

export const updatePentagram_MUTATION = graphql(/* GraphQL */ `
    mutation updatePentagram(
        $set: pentagramsUpdateInput!
        $filter: pentagramsFilter
    ) {
        updatepentagramsCollection(
            filter: $filter,
            set: $set
        ) {
            affectedCount
            records {
                id
            }
        }
    }
`)