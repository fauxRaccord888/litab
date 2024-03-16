import type { DBGenre } from '../types';
import type { ISlotRenderConfig } from '$feature/template/type';
import type { InfoCardRenderConfigKey } from '$feature/template/components/InfoCardTemplate';
import GenreInfoCard from './common/GenreInfoCard';

import "./style/genreSelectView.scss"

type GenreSelectViewProps = {
    item: DBGenre
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
    handleClickItem?: (id: string) => void
}

export default function OeuvreSearchView(props: GenreSelectViewProps) {
    const { item, renderConfig, handleClickItem } = props

    return (
        <div className="genre-select-view-component">
            <GenreInfoCard
                key={item.id}
                item={item}
                renderConfig={renderConfig}
                handleClickItem={handleClickItem}
            />
        </div>
    )
}