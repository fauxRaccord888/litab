import type { DBOeuvre, OeuvreEventHandler } from '../types';
import type { BaseEventHandler, UnprocessedContext } from '$lib/types/components';
import type { PentagramEventHandler } from '$feature/Pentagram/types';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TIME } from '$feature/Pentagram/constants';

import SelectViewTemplate from '$feature/template/components/SelectViewTemplate';
import OeuvreInfoCard from './common/OeuvreInfoCard';
import PentagramCard from '$feature/Pentagram/components/PentagramCard';
import Tab from '$lib/components/common/Tab';
import InfiniteScrollTrigger from '$lib/components/common/InfiniteScrollTrigger';

type OeuvreSelectViewProps = {
    item: DBOeuvre
    context: UnprocessedContext,
    eventHandler: BaseEventHandler & OeuvreEventHandler & PentagramEventHandler
}

export default function OeuvreSelectView(props: OeuvreSelectViewProps) {
    const { item, context, eventHandler } = props
    const { t } = useTranslation()
    
    const infoCardComponent = (
        <OeuvreInfoCard
            key={item.id}
            item={item}
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
        item?.pentagram_nodesCollection?.edges.map((edge) => (
            <PentagramCard
                key={edge.node.pentagrams.id}
                item={edge.node.pentagrams}
                renderConfig={{
                    metaInfo: true,
                    mainPentagon: true,
                    description: false,
                    revision: false
                }}
                eventHandler={eventHandler}
                options={{}}
                timestamp={new Date(Date.now() + TIME.NOW_OFFSET)}
                context={context}
            />
        )) || []
    ), [context, eventHandler, item?.pentagram_nodesCollection?.edges])

    const loader = useMemo(() => (
        <InfiniteScrollTrigger
            hasNextPage={item.pentagram_nodesCollection?.pageInfo.hasNextPage}
            handleLoadMore={eventHandler.handleLoadMore}
        />
    ), [eventHandler.handleLoadMore, item.pentagram_nodesCollection?.pageInfo.hasNextPage])

    const tabComponent = (
        <Tab
            items={[
                {
                    label: t("oeuvre.tab.pentagram"),
                    items: pentagramComponents.concat(loader)
                },
                {
                    label: t("oeuvre.tab.user"),
                    items: [<span>미구현</span>]
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