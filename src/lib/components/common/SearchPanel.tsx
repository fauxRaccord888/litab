import type { FormEventHandler } from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "./Button"
import Input from "./Input"
import SearchIcon from "../icons/SearchIcon"

import "./style/searchPanel.scss"

interface SearchPanelProps {
    submitFunction: (keyword: string) => void
}

export default function SearchPanel(props: SearchPanelProps) {
    const { submitFunction } = props
    const [keyword, setKeyword] = useState('')
    const { t } = useTranslation()

    const onSubmit:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        submitFunction(keyword)    
    }

    return (
        <div className="search-panel-component">
            <form onSubmit={onSubmit} className="search-panel-component__search-form">
                <Input label="search" icon={SearchIcon} value={keyword} onChange={setKeyword}/>
                <Button primary>{t(`button.search`)}</Button>
            </form>
        </div>
    )
}