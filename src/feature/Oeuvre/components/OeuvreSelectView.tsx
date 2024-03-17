import type { DBOeuvre } from '../types';
import type { ISlotRenderConfig } from '$feature/template/type';
import type { InfoCardRenderConfigKey } from '$feature/template/components/InfoCardTemplate';
import type { TabItem } from '$lib/components/common/Tab';

import OeuvreInfoCard from './common/OeuvreInfoCard';
import Tab from '$lib/components/common/Tab';

import "./style/oeuvreSelectView.scss"

type OeuvreSelectViewProps = {
    item: DBOeuvre
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
    handleClickItem?: (item: DBOeuvre) => void

    tabItems?: TabItem[]
}

export default function OeuvreSelectView(props: OeuvreSelectViewProps) {
    const { item, renderConfig, handleClickItem, tabItems } = props

    return (
        <div className="oeuvre-select-view-component">
            <OeuvreInfoCard
                key={item.id}
                item={item}
                renderConfig={renderConfig}
                handleClickItem={handleClickItem}
            />
            {tabItems &&
                <Tab items={tabItems} />
            }
        </div>
    )
}