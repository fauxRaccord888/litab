import { graphql } from "$lib/graphql/__generated__"
  
export const insertPentagramNode_MUTATION = graphql(/* GraphQL */ `
    mutation insertPentagramNode(
        $input: [pentagram_nodesInsertInput!]!
    ) {
        insertIntopentagram_nodesCollection(
            objects: $input
        ) {
            affectedCount
            records {
                id
                oeuvre_id                
            }
        }
    }
`)

export const updatePentagramNode_MUTATION = graphql(/* GraphQL */ `
    mutation updatePentagramNode(
        $set: pentagram_nodesUpdateInput!
        $filter: pentagram_nodesFilter
    ) {
        updatepentagram_nodesCollection(
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
