import type { DoubleLinkedNode } from "$lib/types"

export function dateDoubleLinkedListToMap(dll: DoubleLinkedNode<Date>[]): Map<string, DoubleLinkedNode<Date>>{
    const result = new Map()
    dll.forEach((node) => {
        result.set(node.value.getTime().toString(), node)
    })

    return result
}