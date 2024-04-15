import type { DBArtist } from "$feature/Artist/types";
import type { DBGenre } from "$feature/Genre/types";
import type { QueryResultsObj, SearchDropdownKey } from "$feature/search/types";

import { useState } from "react";
import { useSearchQuery } from "$feature/search/hooks";
import { SEARCH } from "$feature/search/constants";

import Modal from "$feature/portal/components/Modal";
import MainSearchView from "$feature/search/components/MainSearchView";
import './style/addRelationModal.scss'

type AddRelationModalProps = {
    title: string,
    type: "artists" |"genres"
    handleClickClose: () => void
    handleAddRelation: (t: DBArtist | DBGenre) => void
}

export default function AddRelationModal(props: AddRelationModalProps) {
    const { title, type, handleClickClose, handleAddRelation } = props
    const [keyword, setKeyword] = useState("")
    const [searchArtists, result] = useSearchQuery(keyword)[type]

    const handleSearchOeuvres = async (
        _key: SearchDropdownKey | null | undefined, 
        keywordParam: string, 
        includeCursor?: boolean
    ) => {
        setKeyword(keywordParam)
        searchArtists(keywordParam, includeCursor)
    }

    const keys = [type] satisfies SearchDropdownKey[]
    const queryResult = {
        [type]: result
    } as QueryResultsObj<"artists" | "genres">

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <div className="add-relation-modal-component__inner-cotainer">
                <MainSearchView<typeof keys[number]>
                    queryResults={queryResult}
                    dropdownProps={{
                        keys,
                        name: SEARCH.dropdownName,
                    }}
                    eventHandler={{
                        search: handleSearchOeuvres,
                        selectArtist: handleAddRelation,
                        selectGenre: handleAddRelation
                    }}
                />
            </div>
        </Modal>
    )
}