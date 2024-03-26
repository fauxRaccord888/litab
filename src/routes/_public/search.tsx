import type { SearchDropdownKey } from '$feature/search/types'
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
    const searchQuery = useSearchQuery()
    const { result } = searchQuery
    const oeuvreNavigate = useOeuvreNavigate()
    const genreNavigate = useGenreNavigate()
    const artistNavigate = useArtistNavigate()

    const handleSearch = async (key: SearchDropdownKey, keyword: string) => {
        const [queryFunction] = searchQuery[key]
        queryFunction(keyword)
    }

    const eventHandler = {
        search: handleSearch,
        selectOeuvre: (oeuvreId: string) => oeuvreNavigate.select(oeuvreId),
        selectArtist: (artistId: string) => artistNavigate.select(artistId),
        selectGenre: (genreId: string) => genreNavigate.select(genreId)
    }

    return (
        <MainSearchView 
            searchResult={result}
            context={context}
            dropdownProps={{
                keys: ["users", "oeuvres", "artists", "genres"],
                name: SEARCH.dropdownName
            }}
            eventHandler={eventHandler}
        />
    )
}