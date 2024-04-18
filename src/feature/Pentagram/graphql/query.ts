import { graphql } from "$lib/graphql/__generated__"

export const getPentagramUpdateInfoById_QUERY = graphql(/* GraphQL */ `
    query getPentagramUpdateInfoById($id: UUID!) {
        pentagramsCollection(
            filter: { id: { eq: $id } }
        ) {
            edges {
                node {
                    ...PentagramsUpdateInfo
                }
            }
        }
    }
`)

export const getPentagramSelectInfoById_QUERY = graphql(/* GraphQL */ `
    query getPentagramSelectInfoById($id: UUID!) {
        pentagramsCollection(
            filter: { id: { eq: $id } }
        ) {
            edges {
                node {
                    ...PentagramsSelectInfo
                }
            }
        }
    }
`)

export const getPentagramsSelectUserInfoById_QUERY = graphql(/* GraphQL */ `
    query getPentagramsSelectUserInfoById($id: UUID!) {
        pentagramsCollection(
            filter: { id: { eq: $id } }
        ) {
            edges {
                node {
                    ...PentagramsSelectUserInfo
                }
            }
        }
    }
`)

export const getPentagramNodesInfoById_QUERY = graphql(/* GraphQL */ `
    query getPentagramNodesInfoById($id: UUID!) {
        pentagramNodesCollection(
            filter: { id: { eq: $id } }
        ) {
            edges {
                node {
                    ...PentagramNodesInfo
                }
            }
        }
    }
`)

export const getPentagramRevisionsInfoById_QUERY = graphql(/* GraphQL */ `
    query getPentagramRevisionsInfoById($id: UUID!) {
        pentagramRevisionsCollection(
            filter: { id: { eq: $id } }
        ) {
            edges {
                node {
                    ...PentagramRevisionsInfo
                }
            }
        }
    }
`)