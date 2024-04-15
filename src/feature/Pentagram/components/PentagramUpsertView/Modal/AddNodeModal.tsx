import type { DBOeuvre } from "$feature/Oeuvre/types";
import type { SearchDropdownKey } from "$feature/search/types";

import { useState } from "react";
import { useSearchQuery } from "$feature/search/hooks";
import { SEARCH } from "$feature/search/constants";

import Modal from "$feature/portal/components/Modal";
import MainSearchView from "$feature/search/components/MainSearchView";
import './style/addNodeModal.scss'

type AddNodeModalProps = {
    title: string,
    handleClickClose: () => void
    handleAddNode: (item: DBOeuvre) => void
}

export default function AddNodeModal(props: AddNodeModalProps) {
    const { title, handleClickClose, handleAddNode } = props
    const [keyword, setKeyword] = useState("")
    const [searchOeuvres, result] = useSearchQuery(keyword).oeuvres

    const handleSearchOeuvres = async (
        _key: SearchDropdownKey | null | undefined, 
        keywordParam: string, 
        includeCursor?: boolean
    ) => {
        setKeyword(keywordParam)
        searchOeuvres(keywordParam, includeCursor)
    }

    const keys = ["oeuvres"] satisfies SearchDropdownKey[]

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <div className="add-node-modal-component__inner-cotainer">
                <MainSearchView<typeof keys[number]>
                    queryResults={{
                        oeuvres: result
                    }}
                    dropdownProps={{
                        keys,
                        name: SEARCH.dropdownName,
                    }}
                    eventHandler={{
                        search: handleSearchOeuvres,
                        selectOeuvre: handleAddNode,
                    }}
                />
            </div>
        </Modal>
    )
}