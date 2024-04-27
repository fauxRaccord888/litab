import type { RefObject } from "react"
import { useCallback, useEffect, useRef } from "react";

export function useIntersectionObserver(
    sentinelRef: RefObject<HTMLDivElement>,
    onEnterCb: () => void,
    onLeaveCb?: () => void
) {
	const observerRef = useRef<IntersectionObserver | null>(null);

    const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting && onEnterCb) {
            onEnterCb()
        }
        if (!entries[0].isIntersecting && onLeaveCb) {
            onLeaveCb()
        }
    }, [onEnterCb, onLeaveCb])


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
    }, [handleIntersect, sentinelRef]);

    useEffect(() => {
        if (observerRef.current && sentinelRef.current) {
            observerRef.current.disconnect();
            observerRef.current.observe(sentinelRef.current);
        }
    }, [sentinelRef]);
}