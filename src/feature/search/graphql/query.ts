import { graphql } from "$lib/graphql/__generated__"

export const searchOeuvres_QUERY = graphql(/* GraphQL */ `
    query searchOeuvres(
        $keyword: String!,
        $limit: Int,
        $cursor : Cursor
    ) {
        oeuvresCollection(
            orderBy: {
                id: DescNullsLast
            }
            first: $limit
            after: $cursor
            filter: { title: { ilike: $keyword } }
        ) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                cursor
                node {
                    ...OeuvresMinimalInfo
                }
            }
        }
    }
`)

export const searchUsers_QUERY = graphql(/* GraphQL */ `
    query searchUsers(
        $keyword: String!,
        $limit: Int,
        $cursor: Cursor
    ) {
        usersCollection(
            orderBy: {
                mutableId: DescNullsLast
            }
            first: $limit
            after: $cursor
            filter: { mutableId: { ilike: $keyword } }
        ) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                cursor
                node {
                    ...MiniProfileInfo
                }
            }
        }
    }
`)

export const searchArtists_QUERY = graphql(/* GraphQL */ `
    query searchArtists(
        $keyword: String!,
        $limit: Int,
        $cursor: Cursor
    ) {
        artistsCollection(
            orderBy: {
                id: DescNullsLast
            }
            first: $limit
            after: $cursor
            filter: { name: { ilike: $keyword } }
        ) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                cursor
                node {
                    ...ArtistsMinimalInfo
                }
            }
        }
    }
`)

export const searchGenres_QUERY = graphql(/* GraphQL */ `
    query searchGenres(
        $keyword: String!,
        $limit: Int,
        $cursor: Cursor
    ) {
        genresCollection(
            orderBy: {
                id: DescNullsLast
            }
            first: $limit
            after: $cursor
            filter: { name: { ilike: $keyword } }
        ) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                cursor
                node {
                    ...GenresMinimalInfo
                }
            }
        }
    }
`)
