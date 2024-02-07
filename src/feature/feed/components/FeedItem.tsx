import type PentagramInfo from '$feature/Pentagram/components/common/PentagramInfo';
import FeedMessage from "./common/FeedMessage";
import "./style/feedItem.scss"

// TODO Interface 통합
interface FeedItemProps {
    children: ReturnType<typeof PentagramInfo>
}

export default function FeedItem(props: FeedItemProps) {
    return (
        <div className="feed-item-container">
            <div className="inner-container">
                <FeedMessage {...props.children.props}/>
                {props.children}
            </div>
        </div>
    )
}