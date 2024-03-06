import { graphql } from "$lib/graphql/__generated__"

export const insertPentagramUpsertChangeRecords_MUTATION = graphql(/* GraphQL */ `
    mutation insertPentagramUpsertChangeRecords(
        $input: [pentagram_revision_upsert_recordsInsertInput!]!
    ) {
        insertIntopentagram_revision_upsert_recordsCollection(
            objects: $input
        ) {
            affectedCount
            records {
                id
            }
        }
    }
`)

export const insertPentagramUpdateChangeRecords_MUTATION = graphql(/* GraphQL */ `
    mutation insertPentagramUpdateChangeRecords(
        $input: [pentagram_revision_update_recordsInsertInput!]!
    ) {
        insertIntopentagram_revision_update_recordsCollection(
            objects: $input
        ) {
            affectedCount
            records {
                id
            }
        }
    }
`)

export const insertPentagramRemoveChangeRecords_MUTATION = graphql(/* GraphQL */ `
    mutation insertPentagramRemoveChangeRecords(
        $input: [pentagram_revision_remove_recordsInsertInput!]!
    ) {
        insertIntopentagram_revision_remove_recordsCollection(
            objects: $input
        ) {
            affectedCount
            records {
                id
            }
        }
    }
`)

export const insertPentagramRecoverChangeRecords_MUTATION = graphql(/* GraphQL */ `
    mutation insertPentagramRecoverChangeRecords(
        $input: [pentagram_revision_recover_recordsInsertInput!]!
    ) {
        insertIntopentagram_revision_recover_recordsCollection(
            objects: $input
        ) {
            affectedCount
            records {
                id
            }
        }
    }
`)
