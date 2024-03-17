import type { DBArtist } from '../types';
import type { ISlotRenderConfig } from '$feature/template/type';
import type { InfoCardRenderConfigKey } from '$feature/template/components/InfoCardTemplate';
import type { TabItem } from '$lib/components/common/Tab';
import ArtistInfoCard from './common/ArtistInfoCard';
import Tab from '$lib/components/common/Tab';

import "./style/artistSelectView.scss"

type ArtistSelectViewProps = {
    item: DBArtist
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
    handleClickItem?: (id: string) => void,
    tabItems: TabItem[]
}

export default function ArtistSelectView(props: ArtistSelectViewProps) {
    const { item, renderConfig, handleClickItem, tabItems } = props

    return (
        <div className="artist-select-view-component">
            <ArtistInfoCard
                key={item.id}
                item={item}
                renderConfig={renderConfig}
                handleClickItem={handleClickItem}
            />
            {tabItems &&
                <Tab items={tabItems}/>
            }
        </div>
    )
}