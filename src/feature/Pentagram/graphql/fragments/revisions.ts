import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment PentagramRevisionsInfo on pentagram_revisions {
        id
        created_at
        pentagrams {
            id
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

graphql(/* GraphQL */ `
    fragment PentagramRevisionsMinimalInfo on pentagram_revisions {
        id
        created_at
        pentagrams {
            id
        }
        pentagram_revision_update_recordsCollection {
            totalCount
        }
        pentagram_revision_upsert_recordsCollection {
            totalCount
        }
        pentagram_revision_remove_recordsCollection {
            totalCount
        }
        pentagram_revision_recover_recordsCollection {
            totalCount
        }
    }
`)