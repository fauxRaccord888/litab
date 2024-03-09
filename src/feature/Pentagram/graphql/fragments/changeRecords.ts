import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment UpdateRecordInfo on pentagram_revision_update_records {
        id
        pentagram_nodes {
            oeuvres {
                ...OeuvresMinimalInfo
            }
        }
        pentagram_revisions {
            created_at
        }
        current_angle
        current_distance
        previous_angle
        previous_distance
    }
`)

graphql(/* GraphQL */ `
    fragment UpsertRecordInfo on pentagram_revision_upsert_records {
        id
        pentagram_nodes {
            oeuvres {
                ...OeuvresMinimalInfo
            }
        }
        pentagram_revisions {
            created_at
        }
        current_angle
        current_distance
    }
`)

graphql(/* GraphQL */ `  
    fragment RemoveRecordInfo on pentagram_revision_remove_records {
        id
        pentagram_nodes {
            oeuvres {
                ...OeuvresMinimalInfo
            }
        }
        pentagram_revisions {
            created_at
        }
        previous_angle
        previous_distance
    }
`)

graphql(/* GraphQL */ `
    fragment RecoverRecordInfo on pentagram_revision_recover_records {
        id
        pentagram_nodes {
            oeuvres {
                ...OeuvresMinimalInfo
            }
        }
        pentagram_revisions {
            created_at
        }
        current_angle
        current_distance
    }
`)