import type { FeedItems } from '../type';
import type { FormatProps } from '$lib/types/components';

import FeedMessage from "./common/FeedMessage";
import PentagramSelectView from '$feature/Pentagram/components/PentagramSelectView';
import "./style/feedItem.scss"

export default function FeedItem(props: FormatProps<FeedItems>) {
    let feedItem = null
    const { item } = props

    if (item.__typename === 'pentagrams') {
        feedItem = <PentagramSelectView feed item={item} />
    }

    return (
        <div className="feed-item-container">
            <div className="inner-container">
                <FeedMessage {...props}/>
                {feedItem}
            </div>
        </div>
    )
}