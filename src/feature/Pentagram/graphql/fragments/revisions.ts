import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment PentagramRevisionsInfo on pentagram_revisionsConnection {
        edges {
            node {
                id
                created_at
                pentagrams {
                    id
                }
                pentagram_revision_update_recordsCollection {
                    ...UpdateRecordInfo
                }
                pentagram_revision_upsert_recordsCollection {
                    ...UpsertRecordInfo
                }
                pentagram_revision_remove_recordsCollection {
                    ...RemoveRecordInfo
                }
                pentagram_revision_recover_recordsCollection {
                    ...RecoverRecordInfo
                }
            }
        }
    }
`)