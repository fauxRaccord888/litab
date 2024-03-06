import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment UpdateRecordInfo on pentagram_revision_update_recordsConnection {
        edges {
            node {
                id
                pentagram_nodes {
                oeuvres {
                    ...OeuvresInfo
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
        }
    }
`)

graphql(/* GraphQL */ `
    fragment UpsertRecordInfo on pentagram_revision_upsert_recordsConnection {
        edges {
            node {
                id
                pentagram_nodes {
                    oeuvres {
                        ...OeuvresInfo
                    }
                }
                pentagram_revisions {
                    created_at
                }
                current_angle
                current_distance
            }
        }
    }
`)

graphql(/* GraphQL */ `  
    fragment RemoveRecordInfo on pentagram_revision_remove_recordsConnection {
        edges {
            node {
                id
                pentagram_nodes {
                    oeuvres {
                        ...OeuvresInfo
                    }
                }
                pentagram_revisions {
                    created_at
                }
                previous_angle
                previous_distance
            }
        }
    }
`)

graphql(/* GraphQL */ `
    fragment RecoverRecordInfo on pentagram_revision_recover_recordsConnection {
        edges {
            node {
                id
                pentagram_nodes {
                    oeuvres {
                        ...OeuvresInfo
                    }
                }
                pentagram_revisions {
                    created_at
                }
                current_angle
                current_distance
            }
        }
    }
`)