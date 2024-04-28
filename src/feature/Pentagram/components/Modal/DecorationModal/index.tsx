import type { PentagramDecorationPayload } from "$feature/Pentagram/types";
import type { DBInventory } from "$feature/Inventory/types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SEARCH } from "$feature/search/constants";
import Modal from "$feature/portal/components/Modal";
import SearchPanel from "$lib/components/common/SearchPanel";
import DecorationModalTabItem from "./DecorationModalTabItem";
import Tab from "$lib/components/common/Tab";
import "./style/decorationModal.scss"

type DecorationModalProps = {
    title: string,
    pentagramId: string
    foregroundItems: DBInventory
    backgroundItems: DBInventory
    handleClickClose: () => void
    setKeyword: (keyword: string) => void
    handleSearch: (isBackground: boolean, withCursor?: boolean) => void
    handleAddDecoration: (payload: PentagramDecorationPayload) => void
    handleRemoveDecoration: (payload: PentagramDecorationPayload) => void
}

export default function DecorationModal(props: DecorationModalProps) {
    const { 
        title, 
        foregroundItems,
        backgroundItems, 
        pentagramId, 
        handleClickClose, 
        setKeyword,
        handleSearch, 
        handleAddDecoration, 
        handleRemoveDecoration 
    } = props
    const { t } = useTranslation()
    const [isBackground, setIsBackground] = useState(false)

    const onSearch = (formData: FormData) => {
        const formKeyword = formData.get(SEARCH.inputName)?.toString()

        if (typeof formKeyword !== 'string') return
        setKeyword(formKeyword)
        handleSearch(isBackground)
    }

    const onLoadMore = () => {
        handleSearch(isBackground, true)
    }
    
    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <div className="pentagram-decoration-modal-component__inner-container">
                <SearchPanel submitFunction={onSearch} />
                <Tab items={[
                    {
                        label: t("inventory.tab.foreground.label"),
                        onSwitchTab: () => setIsBackground(false),
                        items: [
                            <DecorationModalTabItem 
                                items={foregroundItems}
                                pentagramId={pentagramId}
                                handleAddDecoration={handleAddDecoration}
                                handleRemoveDecoration={handleRemoveDecoration}
                                handleLoadMore={onLoadMore}
                            />
                        ]
                    },
                    {
                        label: t("inventory.tab.background.label"),
                        onSwitchTab: () => setIsBackground(true),
                        items: [
                            <DecorationModalTabItem 
                                items={backgroundItems}
                                pentagramId={pentagramId}
                                handleAddDecoration={handleAddDecoration}
                                handleRemoveDecoration={handleRemoveDecoration}
                                handleLoadMore={onLoadMore}
                            />
                        ]
                    }
                ]} />
            </div>
        </Modal>
    )
}