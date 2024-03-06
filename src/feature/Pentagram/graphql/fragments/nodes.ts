import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment PentagramNodesInfo on pentagram_nodesConnection {
        edges {
            node {
                id
                angle
                distance
                deleted
                oeuvres {
                    ...OeuvresInfo
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
