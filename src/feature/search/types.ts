import type { QueryResult } from "@apollo/client"
import type { OeuvreEventHandler } from "$feature/Oeuvre/types"
import type { ArtistEventHandler } from "$feature/Artist/types"
import type { GenreEventHandler } from "$feature/Genre/types"
import type { SearchArtistsQuery, SearchGenresQuery, SearchOeuvresQuery, SearchUsersQuery } from '$lib/graphql/__generated__/graphql'

const searchDropdownKey = ["users", "oeuvres", "artists", "genres"] as const
export type SearchDropdownKey = typeof searchDropdownKey[number]

export type MainSearchViewEventHandler = (
    OeuvreEventHandler & 
    ArtistEventHandler & 
    GenreEventHandler & {
        search: (key: SearchDropdownKey, keyword: string, includeCursor?: boolean) => void
    }
)

export type SearchDropdownProps = {
    name: string,
    keys: typeof searchDropdownKey
}

export type QueryResults = Record<SearchDropdownKey, QueryResult<
    SearchUsersQuery | 
    SearchOeuvresQuery | 
    SearchArtistsQuery | 
    SearchGenresQuery
>>

export function isSearchDropDownKey(k: unknown): k is SearchDropdownKey {
    return (
        typeof k === 'string' &&
        Boolean(searchDropdownKey.filter((key) => key === k).length)
    )
}
