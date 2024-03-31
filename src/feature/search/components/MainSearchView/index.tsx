import type { MainSearchViewEventHandler, QueryResults, SearchDropdownKey, SearchDropdownProps } from "../../types"
import type { UnprocessedContext } from "$lib/types/components"
import { useState } from "react"
import { isSearchDropDownKey } from "../../types"
import { SEARCH } from "$feature/search/constants"
import SearchPanel from "$lib/components/common/SearchPanel"
import SearchResult from "./SearchResult"
import "./style/mainSearchView.scss"

type MainSearchViewProps = {
    queryResults: QueryResults
    dropdownProps: SearchDropdownProps
    context: UnprocessedContext
    eventHandler: MainSearchViewEventHandler
}

export default function MainSearchView(props: MainSearchViewProps) {
    const { queryResults, dropdownProps, context, eventHandler } = props
    const [keyword, setKeyword] = useState('')
    const [category, setCategory] = useState<SearchDropdownKey | null>(null)

    const handleSearch = (formData: FormData) => {
        setCategory(null)
        setKeyword('')
        const formKeyword = formData.get(SEARCH.inputName)?.toString()
        const formCategory = formData.get(SEARCH.dropdownName)?.toString()

        if (!formKeyword) return
        if (!formCategory) return
        if (!isSearchDropDownKey(formCategory)) return
        setCategory(formCategory)
        setKeyword(formKeyword)
        eventHandler.search(formCategory, formKeyword)
    }

    const handleLoadMore = () => {
        if (!category) return
        if (!isSearchDropDownKey(category)) return
        eventHandler.search(category, keyword, true)
    }

    return (
        <div className="main-search-view-component">
            <div className="main-search-view-component__inner-container">
                <SearchPanel dropdownProps={dropdownProps} submitFunction={handleSearch} />
                <SearchResult 
                    category={category} 
                    queryResults={queryResults} 
                    context={context} 
                    loadMoreFunction={handleLoadMore} 
                    eventHandler={eventHandler} 
                />
            </div>
        </div>
    )
}

