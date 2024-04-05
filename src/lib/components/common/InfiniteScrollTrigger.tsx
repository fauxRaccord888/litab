import { useRef } from "react"
import { useIntersectionObserver } from "$lib/hooks"
import LoadingSpinner from "./LoadingSpinner"
import "./style/infiniteScrollTrigger.scss"

type LoadMoreProps = {
    handleLoadMore: () => void,
    hasNextPage: boolean | undefined
}

export default function InfiniteScrollTrigger(props: LoadMoreProps) {
    const { handleLoadMore, hasNextPage } = props

    const onIntersect = () => {
       hasNextPage && handleLoadMore()
    }

	const sentinelRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(sentinelRef, onIntersect)

    return (
        <div className="infinite-scroll-trigger-component">
            <div className="infinite-scroll-trigger-component__inner-container">
                <div ref={sentinelRef}>{hasNextPage && <LoadingSpinner />}</div>
                {!hasNextPage && <span>・</span>}
            </div>
        </div>
    )
}