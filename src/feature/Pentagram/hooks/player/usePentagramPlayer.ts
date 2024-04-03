import type { DoubleLinkedNode } from "$lib/types";
import type { DBPentagram_SELECT } from "../../types";
import { useCallback, useMemo, useRef, useState } from "react";
import { arrayToDoubleLinkedList } from "$lib/utils";
import { dateDoubleLinkedListToMap } from "../../utils";
import { TIME } from "../../constants";

// COMMENT 제너레이터를 사용하면 깔끔하지만 slider를 통한 탐색 등이 불가능함(이전 탐색 불가능)
// 단순 state, setState를 통해 timestamp를 변경하는 경우, 
// 클로저 문제로 작동하지 않음(callback 함수가 Interval 내부에서는 고정된 함수임)
// => 불가피하게 useRef를 통해 이중으로 state 업데이트하는 구조
// 핵심 기능으로 판단될 경우, react에서 solid와 같은 프레임워크로 마이그레이션 고려

export function usePentagramPlayer(pentagram: DBPentagram_SELECT | undefined | null) {
    const timestamps = useMemo(() => arrayToDoubleLinkedList(
        pentagram
            ?.pentagram_revisionsCollection?.edges
            .map((edge) => new Date(edge.node.created_at))
            .sort((a, b) => a.getTime() - b.getTime()) 
    ), [pentagram])
    const initialTimestamp = useMemo(() => 
        timestamps.at(-1) ?? { value: new Date(Date.now() + TIME.NOW_OFFSET) 
    }, [timestamps])
    const timestampMap = dateDoubleLinkedListToMap(timestamps)

    const timestampRef = useRef<DoubleLinkedNode<Date>>(initialTimestamp)
    const intervalRef = useRef<(() => void) | null>(null)
    const [timestamp, setTimestamp] = useState<Date>(timestampRef.current.value)
    const [isPlaying, setIsPlaying] = useState(false)

    const slideNext = useCallback(() => {
        const { next } = timestampRef.current
        
        if (next) {
            timestampRef.current = next
            if (next.value) setTimestamp(next.value)
        } else if (intervalRef.current) {
            intervalRef.current()
            intervalRef.current = null
            setIsPlaying(false)
        }
    }, [])

    const handlePlayPentagram = useCallback(() => {
        if (!timestamps) return
        if (intervalRef.current) {
            intervalRef.current()
            intervalRef.current = null
            setIsPlaying(false)
            return
        }

        setIsPlaying(true)
        if (!timestampRef.current.next) {
            timestampRef.current = timestamps[0]
        }
        if (timestampRef.current.value) {
            setTimestamp(timestampRef.current.value)
        }

        const interval = setInterval(() => slideNext(), TIME.PLAY_PENTAGRAM_INTERVAL)        
        intervalRef.current = () => clearInterval(interval)
    }, [slideNext, timestamps])

    const handleSetTimestamp = (date: Date) => {
        if (intervalRef.current) {
            intervalRef.current()
            intervalRef.current = null
            setIsPlaying(false)
        }
        const timestampDLN = timestampMap.get(date.getTime().toString())
        if (!timestampDLN) return
        timestampRef.current = timestampDLN
        setTimestamp(timestampRef.current.value)
    }

    return { timestamp, isPlaying, handlePlayPentagram, handleSetTimestamp }
}