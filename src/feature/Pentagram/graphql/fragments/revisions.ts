import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment PentagramRevisionsInfo on PentagramRevisions {
        id
        createdAt
        pentagram {
            id
        }
        pentagramRevisionUpdateRecordsCollection {
            totalCount
            edges {
                node {
                    ...UpdateRecordInfo
                }
            }
        }
        pentagramRevisionUpsertRecordsCollection {
            totalCount
            edges {
                node {
                    ...UpsertRecordInfo
                }
            }
        }
        pentagramRevisionRemoveRecordsCollection {
            totalCount
            edges {
                node {
                    ...RemoveRecordInfo
                }
            }
        }
        pentagramRevisionRecoverRecordsCollection {
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
    fragment PentagramRevisionsMinimalInfo on PentagramRevisions {
        id
        createdAt
        pentagram {
            id
        }
        pentagramRevisionUpdateRecordsCollection {
            totalCount
        }
        pentagramRevisionUpsertRecordsCollection {
            totalCount
        }
        pentagramRevisionRemoveRecordsCollection {
            totalCount
        }
        pentagramRevisionRecoverRecordsCollection {
            totalCount
        }
    }
`)

graphql(/* GraphQL */ `
    fragment PentagramRevisionFeedInfo on PentagramRevisions {
        id
        createdAt
        user {
            ...MiniProfileInfo
        }
        pentagram {
            ...PentagramsSelectInfo
        }
    }
`)