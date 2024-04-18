import type { ISlotRenderConfig } from '$feature/template/type';
import type { PentagramEventHandler } from '$feature/Pentagram/types';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import type { FeedItemOptions, FeedItemRenderConfig, FeedItems } from '../types';

import FeedMessage from "./common/FeedMessage";
import PentagramCard from '$feature/Pentagram/components/PentagramCard';

import "./style/feedItem.scss"

export type FeedItmeConfigProps = {
    renderConfig: ISlotRenderConfig<FeedItemRenderConfig>,
    options: FeedItemOptions,
    eventHandler: PentagramEventHandler & OeuvreEventHandler
}

type FeedItemProps = FeedItmeConfigProps & {
    item: FeedItems
}

export default function FeedItem(props: FeedItemProps) {
    const { item, eventHandler, options } = props
    let feedItem = null

    if (item.__typename === "PentagramRevisions") {
        const { pentagram, id } = item
    
        feedItem = (
            <PentagramCard 
                item={pentagram}
                renderConfig={{
                    metaInfo: true,
                    mainPentagon: true,
                    revision: true,
                    player: false
                }}
                options={{
                    displayRevisionIds: [id],
                    forcedTimestamp: new Date(item.createdAt),
                    enableAnimation: true
                }}
                eventHandler={eventHandler}
            />
        )
    }

    return (
        <div className="feed-item-component">
            {options.showMessage && <FeedMessage item={item}/>}
            {feedItem}
        </div>
    )
}