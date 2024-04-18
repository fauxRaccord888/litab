import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment UpdateRecordInfo on PentagramRevisionUpdateRecords {
        id
        pentagramNode {
            oeuvre {
                ...OeuvresMinimalInfo
            }
        }
        revision {
            createdAt
        }
        currentAngle
        currentDistance
        previousAngle
        previousDistance
    }
`)

graphql(/* GraphQL */ `
    fragment UpsertRecordInfo on PentagramRevisionUpsertRecords {
        id
        pentagramNode {
            oeuvre {
                ...OeuvresMinimalInfo
            }
        }
        revision {
            createdAt
        }
        currentAngle
        currentDistance
    }
`)

graphql(/* GraphQL */ `  
    fragment RemoveRecordInfo on PentagramRevisionRemoveRecords {
        id
        pentagramNode {
            oeuvre {
                ...OeuvresMinimalInfo
            }
        }
        revision {
            createdAt
        }
        previousAngle
        previousDistance
    }
`)

graphql(/* GraphQL */ `
    fragment RecoverRecordInfo on PentagramRevisionRecoverRecords {
        id
        pentagramNode {
            oeuvre {
                ...OeuvresMinimalInfo
            }
        }
        revision {
            createdAt
        }
        currentAngle
        currentDistance
    }
`)