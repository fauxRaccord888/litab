import type { FormEventHandler } from "react"
import type { DropdownProps } from "./Dropdown"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "./Button"
import Dropdown from "./Dropdown"
import Input from "./Input"
import SearchIcon from "../icons/SearchIcon"
import { SEARCH } from "$feature/search/constants"

import "./style/searchPanel.scss"

interface SearchPanelProps {
    dropdownProps?: DropdownProps
    submitFunction: (e: FormData) => void
}

export default function SearchPanel(props: SearchPanelProps) {
    const { submitFunction, dropdownProps } = props
    const [keyword, setKeyword] = useState('')
    const { t } = useTranslation()

    const onSubmit:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        submitFunction(formData)
    }

    return (
        <div className="search-panel-component">
            <form onSubmit={onSubmit} className="search-panel-component__search-form">
                <div className="search-panel-component__search_bar">
                    {dropdownProps && <Dropdown {...dropdownProps} />}
                    <Input label={SEARCH.inputName} iconFunction={SearchIcon} value={keyword} onChange={setKeyword}/>
                </div>
                <Button primary>{t(`button.search`)}</Button>
            </form>
        </div>
    )
}