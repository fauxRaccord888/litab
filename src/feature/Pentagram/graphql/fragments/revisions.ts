import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment PentagramRevisionsInfo on pentagram_revisions {
        id
        created_at
        pentagrams {
            id
        }
        pentagram_revision_update_recordsCollection {
            totalCount
            edges {
                node {
                    ...UpdateRecordInfo
                }
            }
        }
        pentagram_revision_upsert_recordsCollection {
            totalCount
            edges {
                node {
                    ...UpsertRecordInfo
                }
            }
        }
        pentagram_revision_remove_recordsCollection {
            totalCount
            edges {
                node {
                    ...RemoveRecordInfo
                }
            }
        }
        pentagram_revision_recover_recordsCollection {
            totalCount
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

graphql(/* GraphQL */ `
    fragment PentagramRevisionFeedInfo on pentagram_revisions {
        id
        created_at
        users {
            ...MiniProfileInfo
        }
        pentagrams {
            ...PentagramsSelectInfo
        }
    }
`)