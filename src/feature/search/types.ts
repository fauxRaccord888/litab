import type { QueryResult } from "@apollo/client"
import type { ProfileEventHandler } from "$feature/Profile/types"
import type { OeuvreEventHandler } from "$feature/Oeuvre/types"
import type { ArtistEventHandler } from "$feature/Artist/types"
import type { GenreEventHandler } from "$feature/Genre/types"
import type { SearchArtistsQuery, SearchGenresQuery, SearchOeuvresQuery, SearchUsersQuery } from '$lib/graphql/__generated__/graphql'

const searchDropdownKey = ["users", "oeuvres", "artists", "genres"] as const;
export type SearchDropdownKey = typeof searchDropdownKey[number]

type SearchEventHandler<T> = {
    search: (
        key: SearchDropdownKey | undefined | null, 
        keyword: string, 
        includeCursor?: boolean
    ) => void,
    navigateToInsertMetaData?: (
        category: T
    ) => void
}

export type MainSearchViewEventHandler<T=SearchDropdownKey> = (
    ProfileEventHandler &
    OeuvreEventHandler & 
    ArtistEventHandler & 
    GenreEventHandler & 
    SearchEventHandler<T>
)

export type DropdownProps<T = SearchDropdownKey> = {
    name: string,
    keys: T[]
}

export type QueryResults = QueryResult<
    SearchUsersQuery | 
    SearchOeuvresQuery | 
    SearchArtistsQuery | 
    SearchGenresQuery
>
export type QueryResultsObj<T extends string=SearchDropdownKey> = Record<T, QueryResults>

export function isSearchDropDownKey(k: unknown): k is SearchDropdownKey {
    return (
        typeof k === 'string' &&
        Boolean(searchDropdownKey.filter((key) => key === k).length)
    )
}
