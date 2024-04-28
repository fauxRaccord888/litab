import type { DBGenre, GenreEventHandler } from '../types';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import type { InfoCardOptions } from '$feature/template/components/InfoCardTemplate';
import type { BaseEventHandler } from '$lib/types/components';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import GenreInfoCard from './common/GenreInfoCard';
import SelectViewTemplate from '$feature/template/components/SelectViewTemplate';
import OeuvreInfoCard from '$feature/Oeuvre/components/common/OeuvreInfoCard';
import Tab from '$lib/components/common/Tab';
import InfiniteScrollTrigger from '$lib/components/common/InfiniteScrollTrigger';

type GenreSelectViewProps = {
    item: DBGenre
    eventHandler: BaseEventHandler & GenreEventHandler & OeuvreEventHandler
    options?: InfoCardOptions
}

export default function GenreSelectView(props: GenreSelectViewProps) {
    const { item, eventHandler, options } = props
    const { t } = useTranslation()

    const infoCardComponent = (
        <GenreInfoCard
            key={item.id}
            item={item}
            eventHandler={eventHandler}
            renderConfig={{
                coverImage: false,
                title: true,
                mainInfo: true,
                subInfo: true
            }}
            options={options}
        />
    )

    const oeuvreComponents = useMemo(() => (
        item?.oeuvresGenresCollection?.edges.map((edge) => (
            <OeuvreInfoCard
                key={edge.node.oeuvre.id}
                item={edge.node.oeuvre}
                eventHandler={eventHandler}
                renderConfig={{
                    coverImage: true,
                    title: true,
                    mainInfo: false,
                    subInfo: false
                }}
                options={{
                    miniView: true,
                    enableSelect: true,
                }}
            />
        )) || []
    ), [eventHandler, item?.oeuvresGenresCollection?.edges])


    const loader = useMemo(() => {
        const handleLoadMode = () => {
            if (eventHandler.handleLoadMore) {
                eventHandler.handleLoadMore()
            }
        }
    
        return (
            <InfiniteScrollTrigger
            hasNextPage={item.oeuvresGenresCollection?.pageInfo.hasNextPage}
            handleLoadMore={handleLoadMode}
        />
        )
    }, [eventHandler, item.oeuvresGenresCollection?.pageInfo.hasNextPage])


    const tabComponent = (
        <Tab
            items={[
                {
                    label: t("genre.tab.oeuvre"),
                    items: oeuvreComponents.concat(loader)
                },
            ]}
        />
    )

    return (
        <div className="genre-select-view-component">
            <SelectViewTemplate 
                components={{
                    infoCard: infoCardComponent,
                    tab: tabComponent
                }}
            />
        </div>
    )
}