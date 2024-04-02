import type { DoubleLinkedNode } from "../../types"

export function arrayToDoubleLinkedList<T>(arr: T[] | null | undefined): DoubleLinkedNode<T>[] {
    if (!arr) return []
    
    let prev: DoubleLinkedNode<T> | null = null
    const result = arr.map((e) => {
        const cur = {
            value: e,
            prev: prev,
            next: null
        }
        if (prev) {
            prev.next = cur
        }
        prev = cur
        return cur
    })

    return result
}
