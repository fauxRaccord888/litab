import type { DBProfiles } from "$feature/Profile/types";
import type { FeedItems } from "../types";
import type { FeedItmeConfigProps } from "./FeedItem";
import { useMemo } from "react";
import FeedItem from "./FeedItem";
import FollowRecommendation from "./FollowRecommendation";
import InfiniteScrollTrigger from "$lib/components/common/InfiniteScrollTrigger";
import './style/feedList.scss'

type FeedListProps = FeedItmeConfigProps & {
    items: FeedItems[],
    hasNextPage?: boolean
    fetchMoreFeed: () => void,
    recommendedUsers: DBProfiles[] | null | undefined
}

export default function FeedList(props: FeedListProps) {
    const { items, hasNextPage, fetchMoreFeed, renderConfig, options, eventHandler, recommendedUsers } = props

    const loader = useMemo(() => (
        <InfiniteScrollTrigger 
            key="loader"
            handleLoadMore={fetchMoreFeed}
            hasNextPage={hasNextPage}
        />
    ), [fetchMoreFeed, hasNextPage])

    return (
        <div className="feed-list-component">
            {items.map((item) => (
                <div key={item.id} className="feed-list-component__item-container">
                    <div className="feed-list-component__item-inner-container">
                        <FeedItem
                            renderConfig={renderConfig}
                            item={item}
                            eventHandler={eventHandler}
                            options={options}
                        />
                    </div>
                </div>
            )).concat(loader)}
            {items.length === 0 &&
                <FollowRecommendation
                    recommendedUsers={recommendedUsers}
                />
            }
        </div>
    )
}