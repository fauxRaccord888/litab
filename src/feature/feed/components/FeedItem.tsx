import type { FeedItems } from '../type';
import FeedMessage from "./common/FeedMessage";
import PentagramInfo from '$feature/Pentagram/components/common/PentagramInfo';
import "./style/feedItem.scss"

export default function FeedItem(props: FeedItems) {
    let feedItem = null

    if (props.__typename === 'pentagrams') {
        feedItem = <PentagramInfo feed {...props} />
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