import type { DBProfiles } from "$feature/Profile/types";
import type { UnprocessedContext } from "$lib/types/components";
import type { FeedItems } from "../types";
import type { FeedItmeConfigProps } from "./FeedItem";
import FeedItem from "./FeedItem";
import FollowRecommendation from "./FollowRecommendation";
import './style/feedList.scss'

type FeedListProps = FeedItmeConfigProps & {
    items: FeedItems[],
    context: UnprocessedContext,
    recommendedUsers: DBProfiles[] | null | undefined
}

export default function FeedList(props: FeedListProps) {
    const { items, renderConfig, options, eventHandler, context, recommendedUsers } = props

    return (
        <div className="feed-list-component">
            {items.map((item) => (
                <div key={item.id} className="feed-list-component__item-container">
                    <div className="feed-list-component__item-inner-container">
                        <FeedItem
                            renderConfig={renderConfig}
                            item={item}
                            eventHandler={eventHandler}
                            context={context}
                            options={options}
                        />
                    </div>
                </div>
            ))}
            {items.length === 0 &&
                <FollowRecommendation
                    recommendedUsers={recommendedUsers}
                    context={context}
                />
            }
        </div>
    )
}