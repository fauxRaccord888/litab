import type { ReactElement } from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../common/Button"
import Input from "../common/Input"
import ItemIterator from "../common/ItemIterator"
import SearchIcon from "../icons/SearchIcon"

import "./style/index.scss"

type MinimalProp = {
    id: string
}

interface SearchContainerProps<P extends MinimalProp> {
    queryFunction: (keyword: string) => void
    items: P[]
    componentFunction: (p: P) => ReactElement
}

export default function SearchContainer<P extends MinimalProp>(props: SearchContainerProps<P>) {
    const { queryFunction, items, componentFunction } = props
    const [keyword, setKeyword] = useState('')
    const { t } = useTranslation()

    const handleQuery = () => {
        queryFunction(keyword)    
    }

    return (
        <div className="search-container">
            <Input label="search" icon={SearchIcon} value={keyword} onChange={setKeyword}/>
            <Button onClick={handleQuery}>{t(`button.search`)}</Button>
            <ItemIterator 
                items={items}
                componentFunction={componentFunction}
            />
        </div>
    )
}