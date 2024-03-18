import type { DBArtist, ArtistEventHandler } from '../types';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import { useTranslation } from 'react-i18next';

import ArtistInfoCard from './common/ArtistInfoCard';
import SelectViewTemplate from '$feature/template/components/SelectViewTemplate';
import OeuvreInfoCard from '$feature/Oeuvre/components/common/OeuvreInfoCard';
import Tab from '$lib/components/common/Tab';

type ArtistSelectViewProps = {
    item: DBArtist
    eventHandler: ArtistEventHandler & OeuvreEventHandler
}

export default function ArtistSelectView(props: ArtistSelectViewProps) {
    const { item, eventHandler } = props
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
        />
    )

    const tabComponent = (
        <Tab
            items={[
                {
                    label: t("genre.tab.oeuvre"),
                    items: item?.oeuvres_artistsCollection?.edges.map((edge) => (
                        <OeuvreInfoCard
                            item={edge.node.oeuvres}
                            renderConfig={{
                                coverImage: true,
                                title: true,
                                mainInfo: false,
                                subInfo: false
                            }}
                            eventHandler={eventHandler}
                            options={{
                                miniView: true
                            }}
                        />
                    )) || []
                },
                {
                    label: t("genre.tab.user"),
                    items: [<span>미구현</span>]
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