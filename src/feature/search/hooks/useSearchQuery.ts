import type { SearchArtistsQuery, SearchGenresQuery, SearchOeuvresQuery, SearchUsersQuery } from "$lib/graphql/__generated__/graphql";
import type { SearchResults } from "../types";
import { useCallback, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { searchArtists_QUERY, searchGenres_QUERY, searchOeuvres_QUERY, searchUsers_QUERY } from "../graphql";

export function useSearchQuery() {
    const [result, setResult] = useState<SearchResults | null>(null)
    const [userQuery, userStatus] = useLazyQuery<SearchUsersQuery>(searchUsers_QUERY)
    const [oeuvreQuery, oeuvreStatus] = useLazyQuery<SearchOeuvresQuery>(searchOeuvres_QUERY)
    const [artistQuery, artistStatus] = useLazyQuery<SearchArtistsQuery>(searchArtists_QUERY)
    const [geneQuery, genreStatus] = useLazyQuery<SearchGenresQuery>(searchGenres_QUERY)
    
    const isPending = (
        userStatus.loading || oeuvreStatus.loading || artistStatus.loading || genreStatus.loading
    )

    const searchUserHandler = useCallback((keyword: string) => {
        if (isPending) return
        userQuery({
            variables: { keyword: `%${keyword}%`},
            onCompleted: (data) => setResult(data)
        })
    }, [isPending, userQuery]) 

    const searchOeuvresHandler = useCallback((keyword: string) => {
        if (isPending) return
        oeuvreQuery({
            variables: { keyword: `%${keyword}%`},
            onCompleted: (data) => setResult(data)
        })
    }, [isPending, oeuvreQuery]) 

    const searchArtistHandler = useCallback((keyword: string) => {
        if (isPending) return
        artistQuery({
            variables: { keyword: `%${keyword}%`},
            onCompleted: (data) => setResult(data)
        })
    }, [isPending, artistQuery]) 

    const searchGenreHandler = useCallback((keyword: string) => {
        if (isPending) return
        geneQuery({
            variables: { keyword: `%${keyword}%`},
            onCompleted: (data) => setResult(data)
        })
    }, [isPending, geneQuery]) 

    return {
        result: result,
        users: [searchUserHandler, userStatus] as [typeof searchUserHandler, typeof userStatus],
        oeuvres: [searchOeuvresHandler, oeuvreStatus] as [typeof searchOeuvresHandler, typeof oeuvreStatus],
        artists: [searchArtistHandler, artistStatus] as [typeof searchArtistHandler, typeof artistStatus],
        genres: [searchGenreHandler, genreStatus] as [typeof searchGenreHandler, typeof genreStatus],
    }
}