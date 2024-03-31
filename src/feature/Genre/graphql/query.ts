import { graphql } from "$lib/graphql/__generated__"

export const getGenreInfoById_QUERY = graphql(/* GraphQL */ `
    query getGenreInfoById(
        $id: UUID!
        $limit: Int,
        $cursor: Cursor    
    ) {
        genresCollection(
            first: 1,
            filter: { id: { eq: $id } }
        ) {
            edges {
                node {
                    ...GenresInfo
                }
            }
        }
    }
`)
