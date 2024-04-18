import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment PentagramNodesInfo on PentagramNodes {
        id
        oeuvre {
            ...OeuvresMinimalInfo
        }
        pentagramRevisionUpdateRecordsCollection {
            edges {
                node {
                    ...UpdateRecordInfo
                }
            }
        }
        pentagramRevisionUpsertRecordsCollection {
            edges {
                node {
                    ...UpsertRecordInfo
                }
            }
        }
        pentagramRevisionRemoveRecordsCollection {
            edges {
                node {
                    ...RemoveRecordInfo
                }
            }
        }
        pentagramRevisionRecoverRecordsCollection {
            edges {
                node {
                    ...RecoverRecordInfo
                }
            }
        }
    }
`)