import { graphql } from "$lib/graphql/__generated__"

export const getPentagramUpdateInfoById_QUERY = graphql(/* GraphQL */ `
    query getPentagramUpdateInfoById($id: UUID!) {
        pentagramsCollection(
            filter: { id: { eq: $id } }
        ) {
            ...PentagramsUpdateInfo
        }
    }
`)

export const getPentagramSelectInfoById_QUERY = graphql(/* GraphQL */ `
    query getPentagramSelectInfoById($id: UUID!) {
        pentagramsCollection(
            filter: { id: { eq: $id } }
        ) {
            ...PentagramsSelectInfo
        }
    }
`)

export const getPentagramNodesInfoById_QUERY = graphql(/* GraphQL */ `
    query getPentagramNodesInfoById($id: UUID!) {
        pentagram_nodesCollection(
            filter: { id: { eq: $id } }
        ) {
            ...PentagramNodesInfo
        }
    }
`)

export const getPentagramRevisionsInfoById_QUERY = graphql(/* GraphQL */ `
    query getPentagramRevisionsInfoById($id: UUID!) {
        pentagram_revisionsCollection(
            filter: { id: { eq: $id } }
        ) {
            ...PentagramRevisionsInfo
        }
    }
`)