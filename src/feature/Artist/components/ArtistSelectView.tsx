import type { DBArtist } from '../types';
import type { ISlotRenderConfig } from '$feature/template/type';
import type { InfoCardRenderConfigKey } from '$feature/template/components/InfoCardTemplate';
import ArtistInfoCard from './common/ArtistInfoCard';

import "./style/artistSelectView.scss"

type ArtistSelectViewProps = {
    item: DBArtist
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
    handleClickItem?: (id: string) => void
}

export default function ArtistSelectView(props: ArtistSelectViewProps) {
    const { item, renderConfig, handleClickItem } = props

    return (
        <div className="artist-select-view-component">
            <ArtistInfoCard
                key={item.id}
                item={item}
                renderConfig={renderConfig}
                handleClickItem={handleClickItem}
            />
        </div>
    )
}