import type { MainSearchViewEventHandler, SearchDropdownKey } from '$feature/search/types'
import { useState } from 'react'
import { useSearchQuery } from '$feature/search/hooks'
import { useArtistNavigate, useGenreNavigate, useOeuvreNavigate, useProfileNavigate } from '$feature/navigate/hooks'
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
    const [keyword, setKeyword] = useState('')

    const searchQuery = useSearchQuery(keyword)
    const profileNavigate = useProfileNavigate()
    const oeuvreNavigate = useOeuvreNavigate()
    const genreNavigate = useGenreNavigate()
    const artistNavigate = useArtistNavigate()

    const queryResults = {
        users: searchQuery.users[1],
        oeuvres: searchQuery.oeuvres[1],
        artists: searchQuery.artists[1],
        genres: searchQuery.genres[1]
    }

    const handleSearch = async (
        key: SearchDropdownKey | null | undefined, 
        keywordParam: string, 
        includeCursor?: boolean
    ) => {
        if (!key) return
        const [queryFunction] = searchQuery[key]
        setKeyword(keywordParam)
        queryFunction(keywordParam, includeCursor)
    }


    const eventHandler: MainSearchViewEventHandler = {
        search: handleSearch,
        selectProfile: (profile) => profileNavigate.profileSelect(profile.mutable_id),
        selectOeuvre: (oeuvre) => oeuvreNavigate.select(oeuvre.id),
        selectArtist: (artist) => artistNavigate.select(artist.id),
        selectGenre: (genre) => genreNavigate.select(genre.id)
    }

    return (
        <MainSearchView
            queryResults={queryResults}
            dropdownProps={{
                keys: ["users", "oeuvres", "artists", "genres"],
                name: SEARCH.dropdownName
            }}
            eventHandler={eventHandler}
        />
    )
}