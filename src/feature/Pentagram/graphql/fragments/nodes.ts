import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment PentagramNodesInfo on pentagram_nodes {
        id
        oeuvres {
            ...OeuvresInfo
        }
        pentagram_revision_update_recordsCollection {
            edges {
                node {
                    ...UpdateRecordInfo
                }
            }
        }
        pentagram_revision_upsert_recordsCollection {
            edges {
                node {
                    ...UpsertRecordInfo
                }
            }
        }
        pentagram_revision_remove_recordsCollection {
            edges {
                node {
                    ...RemoveRecordInfo
                }
            }
        }
        pentagram_revision_recover_recordsCollection {
            edges {
                node {
                    ...RecoverRecordInfo
                }
            }
        }
    }
`)