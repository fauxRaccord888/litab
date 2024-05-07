/* route */
import { Outlet, createFileRoute } from "@tanstack/react-router";
/* types */
import type { InventoryEventHandler } from "$feature/Inventory/types";
/* hooks */
import { useRedirectOnError } from "$feature/navigate/hooks";
import { useInventoryItems, useInventoryMutation } from "$feature/Inventory/hooks";
/* utils */
import { t } from "i18next";
/* components */
import InventorySelectView from "$feature/Inventory/components/InventorySelectView";

export const Route = createFileRoute('/_auth/account/inventory/')({
    component: InventoryComponent,
    beforeLoad: () => {
        return {
            getTitle: () => t('inventory.route.title')
        }
    },
})

function InventoryComponent() {
    const {
        foregroundData,
        foregroundItems,
        foregroundError,
        backgroundData,
        backgroundItems,
        backgroundError,
        loadMore
    } = useInventoryItems("")

    const { handleCreate, handleDelete, handleRename } = useInventoryMutation()

    const eventHandler = {
        handleCreate, 
        handleDelete, 
        handleRename,
        handleLoadMore: loadMore
    } satisfies InventoryEventHandler

    useRedirectOnError(Boolean(
        (backgroundData && !backgroundItems)
        || (foregroundData && !foregroundItems) 
        || backgroundError
        || foregroundError
    ))

    if (!backgroundItems || !foregroundItems) return null

    return (
        <>
            <InventorySelectView 
                foregroundItems={foregroundItems}
                backgroundItems={backgroundItems}
                eventHandler={eventHandler}
            />
            <Outlet />
        </>
    )
}


