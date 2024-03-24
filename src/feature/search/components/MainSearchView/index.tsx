import type { MainSearchViewEventHandler, SearchDropdownProps, SearchResults } from "../../types"
import type { UnprocessedContext } from "$lib/types/components"
import { isSearchDropDownKey } from "../../types"
import { SEARCH } from "$feature/search/constants"
import SearchPanel from "$lib/components/common/SearchPanel"
import SearchResult from "./SearchResult"
import "./style/mainSearchView.scss"

type MainSearchViewProps = {
    searchResult: SearchResults | null
    dropdownProps: SearchDropdownProps
    context: UnprocessedContext
    eventHandler: MainSearchViewEventHandler
}

export default function MainSearchView(props: MainSearchViewProps) {
    const { searchResult, dropdownProps, context, eventHandler } = props
    console.log(searchResult)

    const handleSearch = (formData: FormData) => {
        const keyword = formData.get(SEARCH.inputName)?.toString()
        const category = formData.get(SEARCH.dropdownName)?.toString()

        if (!keyword) return
        if (!category) return
        if (!isSearchDropDownKey(category)) return
        eventHandler.search(category, keyword)
    }

    return (
        <div className="main-search-view-component">
            <div className="main-search-view-component__inner-container">
                <SearchPanel dropdownProps={dropdownProps} submitFunction={handleSearch} />
                <SearchResult results={searchResult} context={context} eventHandler={eventHandler} />
            </div>
        </div>
    )
}

