import type { MainSearchViewEventHandler, QueryResults, SearchDropdownKey } from "../../../types"
import { useMemo } from "react"
import UserResult from "./UserResult"
import OeuvreResult from "./OeuvreResult"
import ArtistResult from "./ArtistResult"
import GenreResult from "./GenreResult"
import InfiniteScrollTrigger from "$lib/components/common/InfiniteScrollTrigger"
import "./style/searchResult.scss"

type SearchResultProps = {
    category: SearchDropdownKey | null | undefined
    queryResults: QueryResults
    eventHandler: MainSearchViewEventHandler
    loadMoreFunction: () => void
}

export default function SearchResult(props: SearchResultProps) {
    const { category, queryResults, eventHandler, loadMoreFunction } = props

    const hasNextPage = useMemo(() => {        
        if (category === "users") {
            const userData = queryResults.users.data
            if (userData && "usersCollection" in userData) {
                return userData.usersCollection?.pageInfo.hasNextPage
            }
        }

        if (category === "oeuvres") {
            const oeuvreData = queryResults.oeuvres.data
            if (oeuvreData && "oeuvresCollection" in oeuvreData) {
                return oeuvreData.oeuvresCollection?.pageInfo.hasNextPage
            }
        }

        if (category === "artists") {
            const artistData = queryResults.artists.data
            if (artistData && "artistsCollection" in artistData) {
                return artistData.artistsCollection?.pageInfo.hasNextPage
            }
        }

        if (category === "genres") {
            const genreData = queryResults.genres.data
            if (genreData && "genresCollection" in genreData) {
                return genreData.genresCollection?.pageInfo.hasNextPage
            }
        }
    }, [category, queryResults.artists.data, queryResults.genres.data, queryResults.oeuvres.data, queryResults.users.data])

    return (
        <div className="search-result-component">
            {category === "users" &&
                <UserResult queryResults={queryResults} />
            }
            {category === "oeuvres" &&
                <OeuvreResult queryResults={queryResults} eventHandler={eventHandler}/>
            }
            {category === "artists" &&
                <ArtistResult queryResults={queryResults} eventHandler={eventHandler}/>
            }
            {category === "genres" &&
                <GenreResult queryResults={queryResults} eventHandler={eventHandler}/>
            }
            {category &&
                <InfiniteScrollTrigger 
                    handleLoadMore={loadMoreFunction}
                    hasNextPage={hasNextPage}
                />
            }
        </div>
    )
}

