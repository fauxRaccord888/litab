import type { DBGenre, GenreEventHandler } from '../types';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import type { InfoCardOptions } from '$feature/template/components/InfoCardTemplate';
import { useTranslation } from 'react-i18next';

import GenreInfoCard from './common/GenreInfoCard';
import SelectViewTemplate from '$feature/template/components/SelectViewTemplate';
import OeuvreInfoCard from '$feature/Oeuvre/components/common/OeuvreInfoCard';
import Tab from '$lib/components/common/Tab';

type GenreSelectViewProps = {
    item: DBGenre
    eventHandler: GenreEventHandler & OeuvreEventHandler
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

    const tabComponent = (
        <Tab
            items={[
                {
                    label: t("genre.tab.oeuvre"),
                    items: item?.oeuvres_genresCollection?.edges.map((edge) => (
                        <OeuvreInfoCard
                            key={edge.node.oeuvres.id}
                            item={edge.node.oeuvres}
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
                },
                {
                    label: t("genre.tab.user"),
                    items: [<span>미구현</span>]
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