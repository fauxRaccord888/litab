import type { MainSearchViewEventHandler, QueryResultsObj, SearchDropdownKey, DropdownProps } from "../../types"
import { useState } from "react"
import { isSearchDropDownKey } from "../../types"
import { SEARCH } from "$feature/search/constants"
import SearchPanel from "$lib/components/common/SearchPanel"
import SearchResult from "./SearchResult"
import "./style/mainSearchView.scss"

type MainSearchViewProps<T extends SearchDropdownKey>= {
    queryResults: QueryResultsObj<T>
    dropdownProps: DropdownProps<T>
    eventHandler: MainSearchViewEventHandler<T>
}

export default function MainSearchView<T extends SearchDropdownKey>(props: MainSearchViewProps<T>) {
    const { queryResults, dropdownProps, eventHandler } = props

    const [keyword, setKeyword] = useState('')
    const [category, setCategory] = useState<T | null>(null)
    const isSoleCategory = dropdownProps.keys.length === 1
    const firstCategory = dropdownProps.keys[0]

    const handleSearch = (formData: FormData) => {
        setCategory(null)
        setKeyword('')
        const formKeyword = formData.get(SEARCH.inputName)?.toString()
        const formCategory = formData.get(SEARCH.dropdownName)?.toString()

        if (!formKeyword) return
        if (!isSoleCategory && !formCategory) return
        
        if (
            typeof formCategory !== 'undefined' && 
            !isSearchDropDownKey(formCategory)
        ) return

        setCategory(isSoleCategory ? firstCategory : formCategory as T)
        setKeyword(formKeyword)
        eventHandler.search(formCategory, formKeyword)
    }

    const handleLoadMore = () => {
        if (!isSoleCategory && !category) return
        if (
            category && 
            !isSearchDropDownKey(category)
        ) return

        eventHandler.search(category, keyword, true)
    }

    return (
        <div className="main-search-view-component">
            <div className="main-search-view-component__inner-container">
                <SearchPanel dropdownProps={dropdownProps} submitFunction={handleSearch} />
                <SearchResult
                    category={category} 
                    queryResults={queryResults} 
                    loadMoreFunction={handleLoadMore} 
                    eventHandler={eventHandler} 
                />
            </div>
        </div>
    )
}

