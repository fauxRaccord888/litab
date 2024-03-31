import type { SearchDropdownKey } from '$feature/search/types'
import { useState } from 'react'
import { useSearchQuery } from '$feature/search/hooks'
import { useArtistNavigate, useGenreNavigate, useOeuvreNavigate } from '$feature/navigate/hooks'
import { t as translate} from "i18next"
import { createFileRoute } from '@tanstack/react-router'
import { SEARCH } from '$feature/search/constants'
import MainSearchView from '$feature/search/components/MainSearchView'

export const Route = createFileRoute('/_public/search')({
    component: Search,
    beforeLoad: () => {
        return {
            getTitle: () => translate('search.title.index')
        }
    },
})

function Search() {
    const context = Route.useRouteContext()
    
    const [keyword, setKeyword] = useState('')

    const searchQuery = useSearchQuery(keyword)
    const oeuvreNavigate = useOeuvreNavigate()
    const genreNavigate = useGenreNavigate()
    const artistNavigate = useArtistNavigate()

    const queryResults = {
        users: searchQuery.users[1],
        oeuvres: searchQuery.oeuvres[1],
        artists: searchQuery.artists[1],
        genres: searchQuery.genres[1]
    }

    const handleSearch = async (key: SearchDropdownKey, keywordParam: string, includeCursor?: boolean) => {
        const [queryFunction] = searchQuery[key]
        setKeyword(keywordParam)
        queryFunction(keywordParam, includeCursor)
    }

    const eventHandler = {
        search: handleSearch,
        selectOeuvre: (oeuvreId: string) => oeuvreNavigate.select(oeuvreId),
        selectArtist: (artistId: string) => artistNavigate.select(artistId),
        selectGenre: (genreId: string) => genreNavigate.select(genreId)
    }

    return (
        <MainSearchView
            queryResults={queryResults}
            context={context}
            dropdownProps={{
                keys: ["users", "oeuvres", "artists", "genres"],
                name: SEARCH.dropdownName
            }}
            eventHandler={eventHandler}
        />
    )
}