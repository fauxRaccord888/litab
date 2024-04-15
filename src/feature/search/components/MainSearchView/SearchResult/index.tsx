import type { MainSearchViewEventHandler, QueryResults, SearchDropdownKey } from "../../../types"
import { useMemo } from "react"
import UserResult from "./UserResult"
import OeuvreResult from "./OeuvreResult"
import ArtistResult from "./ArtistResult"
import GenreResult from "./GenreResult"
import InfiniteScrollTrigger from "$lib/components/common/InfiniteScrollTrigger"
import "./style/searchResult.scss"

type SearchResultProps<T extends string = SearchDropdownKey> = {
    category: T | null | undefined
    queryResults: Record<T, QueryResults>
    eventHandler: MainSearchViewEventHandler<T>
    loadMoreFunction: () => void
}

export default function SearchResult<T extends SearchDropdownKey>(props: SearchResultProps<T>) {
    const { category, queryResults, eventHandler, loadMoreFunction } = props
    
    const hasNextPage = useMemo(() => {
        if (!category) return false
        const data = queryResults[category].data
        if (!data) return false

        if (category === "users" && "usersCollection" in data) {
            return data.usersCollection?.pageInfo.hasNextPage
        }

        if (category === "oeuvres" && "oeuvresCollection" in data) {
            return data.oeuvresCollection?.pageInfo.hasNextPage
        }

        if (category === "artists" && "artistsCollection" in data) {
            return data.artistsCollection?.pageInfo.hasNextPage
        }

        if (category === "genres" && "genresCollection" in data) {
            return data.genresCollection?.pageInfo.hasNextPage
        }
    }, [category, queryResults])

    return (
        <div className="search-result-component">
            {category === "users" &&
                <UserResult queryResults={queryResults[category]} eventHandler={eventHandler}/>
            }
            {category === "oeuvres" &&
                <OeuvreResult queryResults={queryResults[category]} eventHandler={eventHandler}/>
            }
            {category === "artists" &&
                <ArtistResult queryResults={queryResults[category]} eventHandler={eventHandler}/>
            }
            {category === "genres" &&
                <GenreResult queryResults={queryResults[category]} eventHandler={eventHandler}/>
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

