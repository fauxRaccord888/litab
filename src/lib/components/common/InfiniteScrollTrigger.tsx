import { useCallback, useEffect, useRef } from "react"
import LoadingSpinner from "./LoadingSpinner"
import "./style/infiniteScrollTrigger.scss"

type LoadMoreProps = {
    handleLoadMore: () => void,
    hasNextPage: boolean | undefined
}

export default function InfiniteScrollTrigger(props: LoadMoreProps) {
    const { handleLoadMore, hasNextPage } = props
	const sentinelRef = useRef<HTMLDivElement>(null);
	const observerRef = useRef<IntersectionObserver | null>(null);
    

    const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting && hasNextPage) {
            handleLoadMore()
        }
    }, [hasNextPage, handleLoadMore])

	useEffect(() => {
		observerRef.current = new IntersectionObserver(handleIntersect, {
			root: null,
			rootMargin: "0px",
			threshold: 0,
		});

		if (sentinelRef.current) {
			observerRef.current.observe(sentinelRef.current)
		}

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect()
			}
		}
	}, [handleIntersect]);

    useEffect(() => {
		if (observerRef.current && sentinelRef.current) {
			observerRef.current.disconnect();
			observerRef.current.observe(sentinelRef.current);
		}
	}, [hasNextPage]);


    return (
        <div className="infinite-scroll-trigger-component">
            <div className="infinite-scroll-trigger-component__inner-container">
                <div ref={sentinelRef}>{hasNextPage && <LoadingSpinner />}</div>
                {!hasNextPage && <span>・</span>}
            </div>
        </div>
    )
}