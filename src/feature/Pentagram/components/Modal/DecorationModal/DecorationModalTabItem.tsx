import type { DBDecoration, DBInventory } from "$feature/Inventory/types";
import type { PentagramDecorationPayload } from "$feature/Pentagram/types";
import { useTranslation } from "react-i18next";
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import InventoryInformation from "$feature/Inventory/components/InventorySelectView/ItemInformation";
import Button from "$lib/components/common/Button";
import InfiniteScrollTrigger from "$lib/components/common/InfiniteScrollTrigger";
import "./style/decotaionModalTabItem.scss"

type PentagramDecorationModalProps = {
    pentagramId: string
    items: DBInventory
    handleAddDecoration: (payload: PentagramDecorationPayload) => void
    handleRemoveDecoration: (payload: PentagramDecorationPayload) => void
    handleLoadMore: () => void
}

export default function DecorationModalTabItem(props: PentagramDecorationModalProps) {
    const { pentagramId, items, handleAddDecoration, handleRemoveDecoration, handleLoadMore } = props

    return (
        <div className="decoration-modal-tab-item-component">
            {items?.edges.map((edge) => {
                return (
                    <div className="decoration-modal-tab-item-component__item-container">
                        <div className="decoration-modal-tab-item-component__item-inner-container">
                            <InventoryInformation 
                                item={edge.node}
                                eventHandler={{}}
                                disableModal={true}
                                canvasSize={100}
                            />
                            <DecorationModalTabItemButtons 
                                item={edge.node}
                                pentagramId={pentagramId}
                                handleAddDecoration={handleAddDecoration}
                                handleRemoveDecoration={handleRemoveDecoration}
                            />
                        </div>
                    </div>
                )
            })}
            {items?.pageInfo.hasNextPage &&
                <InfiniteScrollTrigger
                    handleLoadMore={handleLoadMore}
                    hasNextPage={items?.pageInfo.hasNextPage}
                />
            }
        </div>
    )
}

function DecorationModalTabItemButtons(props: {
    item: DBDecoration,
    pentagramId: string
    handleAddDecoration: (payload: PentagramDecorationPayload) => void
    handleRemoveDecoration: (payload: PentagramDecorationPayload) => void
}) {
    const { item, pentagramId, handleAddDecoration, handleRemoveDecoration } = props
    const { t } = useTranslation()

    const firstNode = getFirstNodeOfCollection(item.pentagramDecorationsCollection)
    const isAllocated = firstNode
    const isCurrentPentagram = firstNode?.pentagramId === pentagramId

    const addPayload = {
        pentagramId,
        decorationId: item.id
    }

    const removePayload = {
        pentagramId: firstNode?.pentagramId,
        decorationId: item.id
    }

    return (
        <div className="decoration-modal-tab-item-component__button-container">
            {!isAllocated &&
                <Button info onClick={() => handleAddDecoration(addPayload)}>
                    {t("pentagram.decoration.modal.button.add")}
                </Button>
            }
            {isAllocated && isCurrentPentagram &&
                <Button danger onClick={() => handleRemoveDecoration(removePayload)}>
                    {t("pentagram.decoration.modal.button.remove")}
                </Button>
            }
            {isAllocated && !isCurrentPentagram &&
                <Button primary onClick={() => handleRemoveDecoration(removePayload)}>
                    {t("pentagram.decoration.modal.button.retrieve")}
                </Button>
            }
        </div>
    )
}