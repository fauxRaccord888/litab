import type { DBOeuvre, OeuvreEventHandler } from '../types';
import type { BaseEventHandler } from '$lib/types/components';
import type { PentagramEventHandler } from '$feature/Pentagram/types';
import type { InfoCardOptions } from '$feature/template/components/InfoCardTemplate';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import SelectViewTemplate from '$feature/template/components/SelectViewTemplate';
import OeuvreInfoCard from './common/OeuvreInfoCard';
import PentagramCard from '$feature/Pentagram/components/PentagramCard';
import Tab from '$lib/components/common/Tab';
import InfiniteScrollTrigger from '$lib/components/common/InfiniteScrollTrigger';

type OeuvreSelectViewProps = {
    item: DBOeuvre
    options: InfoCardOptions
    eventHandler: BaseEventHandler & OeuvreEventHandler & PentagramEventHandler
}

export default function OeuvreSelectView(props: OeuvreSelectViewProps) {
    const { item, options, eventHandler } = props
    const { t } = useTranslation()
    
    const infoCardComponent = (
        <OeuvreInfoCard
            key={item.id}
            item={item}
            options={options}
            renderConfig={{
                coverImage: true,
                title: true,
                mainInfo: true,
                subInfo: true
            }}
            eventHandler={eventHandler}
        />
    )

    const pentagramComponents = useMemo(() => (
        item?.pentagramNodesCollection?.edges.map((edge) => (
            <PentagramCard
                key={edge.node.pentagram.id}
                item={edge.node.pentagram}
                renderConfig={{
                    metaInfo: true,
                    mainPentagon: true,
                    revision: false,
                    player: false
                }}
                eventHandler={eventHandler}
                options={{}}
            />
        )) || []
    ), [eventHandler, item?.pentagramNodesCollection?.edges])

    const loader = useMemo(() => {
        const handleLoadMore = () => {
            if (eventHandler.handleLoadMore) eventHandler.handleLoadMore()
        }

        return (
            <InfiniteScrollTrigger
                hasNextPage={item.pentagramNodesCollection?.pageInfo.hasNextPage}
                handleLoadMore={handleLoadMore}
            />
        )
    }, [eventHandler, item.pentagramNodesCollection?.pageInfo.hasNextPage])

    const tabComponent = (
        <Tab
            items={[
                {
                    label: t("oeuvre.tab.pentagram"),
                    items: pentagramComponents.concat(loader)
                },
            ]}
        />
    )

    return (
        <div className="oeuvre-select-view-component">
            <SelectViewTemplate
                components={{
                    infoCard: infoCardComponent,
                    tab: tabComponent
                }}
            />
        </div>
    )
}