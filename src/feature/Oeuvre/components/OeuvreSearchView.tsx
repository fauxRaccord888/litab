import type { DBOeuvre } from '../types';
import type { ISlotRenderConfig } from '$feature/template/type';
import type { InfoCardRenderConfigKey } from '$feature/template/components/InfoCardTemplate';
import { useOeuvresQuery } from '../hooks';

import OeuvreInfoCard from './common/OeuvreInfoCard';
import SearchPanel from '$lib/components/common/SearchPanel';

import "./style/oeuvreSearchView.scss"

type OeuvreSearchViewProps = {
    handleClickResult: (item: DBOeuvre) => void
    oeuvreInfoCardRenderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
}

export default function OeuvreSearchView(props: OeuvreSearchViewProps) {
    const { handleClickResult, oeuvreInfoCardRenderConfig } = props
    const [searchOeuvres, {data}] = useOeuvresQuery()
    const items = data?.oeuvresCollection?.edges.map((edge) => edge.node) || []

    return (
        <div className="oeuvre-search-view-component">
            <SearchPanel
                submitFunction={searchOeuvres}
            />
            <div className="oeuvre-search-view-component__result-container">
                {items.map((item) => (
                    <OeuvreInfoCard
                        key={item.id}
                        item={item}
                        renderConfig={oeuvreInfoCardRenderConfig}
                        eventHandler={{
                            selectOeuvre: () => handleClickResult(item)
                        }}
                    />
                ))}
            </div>
        </div>
    )
}