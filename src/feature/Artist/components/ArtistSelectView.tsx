import type { DBArtist, ArtistEventHandler } from '../types';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import type { InfoCardOptions } from '$feature/template/components/InfoCardTemplate';
import type { BaseEventHandler } from '$lib/types/components';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

import ArtistInfoCard from './common/ArtistInfoCard';
import SelectViewTemplate from '$feature/template/components/SelectViewTemplate';
import OeuvreInfoCard from '$feature/Oeuvre/components/common/OeuvreInfoCard';
import Tab from '$lib/components/common/Tab';
import InfiniteScrollTrigger from '$lib/components/common/InfiniteScrollTrigger';

type ArtistSelectViewProps = {
    item: DBArtist
    eventHandler: BaseEventHandler & ArtistEventHandler & OeuvreEventHandler
    options?: InfoCardOptions
}

export default function ArtistSelectView(props: ArtistSelectViewProps) {
    const { item, eventHandler, options } = props
    const { t } = useTranslation()

    const infoCardComponent = (
        <ArtistInfoCard
            key={item.id}
            item={item}
            eventHandler={eventHandler}
            renderConfig={{
                coverImage: true,
                title: true,
                mainInfo: true,
                subInfo: true
            }}
            options={options}
        />
    )

    const oeuvreComponents = useMemo(() => (
        item?.oeuvresArtistsCollection?.edges.map((edge) => (
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
    ), [eventHandler, item?.oeuvresArtistsCollection?.edges])

    const loader = useMemo(() => {
        const handleLoadMode = () => {
            if (eventHandler.handleLoadMore) {
                eventHandler.handleLoadMore()
            }
        }
    
        return (
            <InfiniteScrollTrigger
                hasNextPage={item.oeuvresArtistsCollection?.pageInfo.hasNextPage}
                handleLoadMore={handleLoadMode}
            />
        )
    }, [eventHandler, item.oeuvresArtistsCollection?.pageInfo.hasNextPage])

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
        <div className="artist-select-view-component">
            <SelectViewTemplate 
                components={{
                    infoCard: infoCardComponent,
                    tab: tabComponent
                }}
            />
        </div>
    )
}