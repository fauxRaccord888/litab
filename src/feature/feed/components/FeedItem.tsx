import type { ISlotRenderConfig } from '$feature/template/type';
import type { PentagramEventHandler } from '$feature/Pentagram/types';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import type { UnprocessedContext } from '$lib/types/components';
import type { FeedItemOptions, FeedItemRenderConfig, FeedItems } from '../types';

import FeedMessage from "./common/FeedMessage";
import PentagramCard from '$feature/Pentagram/components/PentagramSelectView';

import "./style/feedItem.scss"

export type FeedItmeConfigProps = {
    renderConfig: ISlotRenderConfig<FeedItemRenderConfig>,
    options: FeedItemOptions,
    eventHandler: PentagramEventHandler & OeuvreEventHandler
    context: UnprocessedContext
}

type FeedItemProps = FeedItmeConfigProps & {
    item: FeedItems
}

export default function FeedItem(props: FeedItemProps) {
    const { item, eventHandler, options, context } = props
    let feedItem = null

    if (item.__typename === 'pentagram_revisions') {
        const { pentagrams, id } = item
    
        feedItem = (
            <PentagramCard 
                item={pentagrams}
                renderConfig={{
                    metaInfo: true,
                    mainPentagon: true,
                    description: true,
                    revision: true
                }}
                options={{
                    horizontalMain: true,
                    displayRevisionIds: [id],
                }}
                timestamp={new Date(item.created_at)}
                eventHandler={eventHandler}
                context={context}
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