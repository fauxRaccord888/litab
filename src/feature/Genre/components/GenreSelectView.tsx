import type { DBGenre } from '../types';
import type { ISlotRenderConfig } from '$feature/template/type';
import type { InfoCardRenderConfigKey } from '$feature/template/components/InfoCardTemplate';
import type { TabItem } from '$lib/components/common/Tab';

import GenreInfoCard from './common/GenreInfoCard';
import Tab from '$lib/components/common/Tab';

import "./style/genreSelectView.scss"

type GenreSelectViewProps = {
    item: DBGenre
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
    handleClickItem?: (id: string) => void
    tabItems?: TabItem[]    
}

export default function OeuvreSearchView(props: GenreSelectViewProps) {
    const { item, renderConfig, handleClickItem, tabItems } = props

    return (
        <div className="genre-select-view-component">
            <GenreInfoCard
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