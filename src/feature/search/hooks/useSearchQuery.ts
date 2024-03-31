import type { SearchArtistsQuery, SearchGenresQuery, SearchOeuvresQuery, SearchUsersQuery } from "$lib/graphql/__generated__/graphql";
import { useCallback } from "react";
import { useQuery } from "@apollo/client";
import { searchArtists_QUERY, searchGenres_QUERY, searchOeuvres_QUERY, searchUsers_QUERY } from "../graphql";
import { NETWORK } from "$lib/constants";

const initialOptions = (keyword: string) => ({
    variables: {
        keyword: `%${keyword}%`,
        limit: 0
    }
})

// COMMENT 
// keyword를 hook 초기화 시에 받지만 이후 핸들러에서 또 받는 이유는 
// -> 리액트 렌더링 특성 상, state 업데이트가 다음 hooks 호출에서 업데이트 되기 때문에 이전 keyword로 검색되는 문제로 인함

export function useSearchQuery(keyword: string) {
    const userQuery = useQuery<SearchUsersQuery>(searchUsers_QUERY, initialOptions(keyword))
    const oeuvreQuery = useQuery<SearchOeuvresQuery>(searchOeuvres_QUERY, initialOptions(keyword))
    const artistQuery = useQuery<SearchArtistsQuery>(searchArtists_QUERY, initialOptions(keyword))
    const genreQuery = useQuery<SearchGenresQuery>(searchGenres_QUERY, initialOptions(keyword))
    
    const isPending = (
        userQuery.loading || oeuvreQuery.loading || artistQuery.loading || genreQuery.loading
    )

    const searchUserHandler = useCallback((keyword: string, includeCursor?: boolean) => {
        if (isPending) return
        userQuery.fetchMore({
            variables: { 
                keyword: `%${keyword}%`,
                cursor: includeCursor ? userQuery?.data?.usersCollection?.pageInfo.endCursor : null,
                limit: NETWORK.readLimit
            },
        })
    }, [isPending, userQuery]) 

    const searchOeuvresHandler = useCallback((keyword: string, includeCursor?: boolean) => {
        if (isPending) return
        oeuvreQuery.fetchMore({
            variables: { 
                keyword: `%${keyword}%`,
                cursor: includeCursor ? oeuvreQuery?.data?.oeuvresCollection?.pageInfo.endCursor : null,
                limit: NETWORK.readLimit
            },
        })
    }, [isPending, oeuvreQuery]) 

    const searchArtistHandler = useCallback((keyword: string, includeCursor?: boolean) => {
        if (isPending) return
        artistQuery.fetchMore({
            variables: { 
                keyword: `%${keyword}%`,
                cursor: includeCursor ? artistQuery?.data?.artistsCollection?.pageInfo.endCursor : null,
                limit: NETWORK.readLimit
            },
        })
    }, [isPending, artistQuery]) 

    const searchGenreHandler = useCallback(async (keyword: string, includeCursor?: boolean) => {
        if (isPending) return
        genreQuery.fetchMore({
            variables: { 
                keyword: `%${keyword}%`,
                cursor: includeCursor ? genreQuery?.data?.genresCollection?.pageInfo.endCursor : null,
                limit: NETWORK.readLimit
            },
        })
    }, [isPending, genreQuery]) 

    return {
        users: [searchUserHandler, userQuery] as [typeof searchUserHandler, typeof userQuery],
        oeuvres: [searchOeuvresHandler, oeuvreQuery] as [typeof searchOeuvresHandler, typeof oeuvreQuery],
        artists: [searchArtistHandler, artistQuery] as [typeof searchArtistHandler, typeof artistQuery],
        genres: [searchGenreHandler, genreQuery] as [typeof searchGenreHandler, typeof genreQuery],
    }
}