import type { DBInventory, InventoryEventHandler } from "../../types"
import { useTranslation } from "react-i18next"
import { useCallback, useMemo } from "react"
import Tab from "$lib/components/common/Tab"
import InfiniteScrollTrigger from "$lib/components/common/InfiniteScrollTrigger"
import InventoryInformation from "./ItemInformation"

type InventorySelectViewProps = {
    foregroundItems: DBInventory
    backgroundItems: DBInventory
    eventHandler: InventoryEventHandler
}

export default function InventorySelectView(props: InventorySelectViewProps) {
    const { foregroundItems, backgroundItems, eventHandler } = props
    const { t } = useTranslation()

    const handleLoadMore = useCallback((isBackground: boolean) => {
        if (eventHandler.handleLoadMore) {
            eventHandler.handleLoadMore(isBackground, true)
        }
    }, [eventHandler])

    const foregroundComponents = useMemo(() => {
        const foregroundInfos = foregroundItems?.edges
            .map((edge) => (
                <InventoryInformation
                    key={edge.node.id}
                    item={edge.node}
                    eventHandler={eventHandler}
                    canvasSize={200}
                />
            )) || [];
        const loader = (
            <InfiniteScrollTrigger
                hasNextPage={foregroundItems?.pageInfo.hasNextPage}
                handleLoadMore={() => handleLoadMore(false)}
            />
        )
        return foregroundInfos.concat(loader)
    }, [eventHandler, foregroundItems, handleLoadMore])

    const backgroundComponents = useMemo(() => {
        const shadows = backgroundItems?.edges
            .map((edge) => (
                <InventoryInformation
                    key={edge.node.id}
                    item={edge.node}
                    eventHandler={eventHandler}
                    canvasSize={200}
                />
            )) || [];
        const loader = (
            <InfiniteScrollTrigger
                hasNextPage={backgroundItems?.pageInfo.hasNextPage}
                handleLoadMore={() => handleLoadMore(true)}
            />
        )
        return shadows.concat(loader)
    }, [backgroundItems, eventHandler, handleLoadMore])

    return (
        <div className="inventory-component">
            <Tab items={[
                {
                    label: t("inventory.tab.foreground.label"),
                    items: foregroundComponents,
                    description: t("inventory.tab.foreground.description")
                },
                {
                    label: t("inventory.tab.background.label"),
                    items: backgroundComponents,
                    description: t("inventory.tab.background.description")
                },
            ]} />
        </div>
    )

}