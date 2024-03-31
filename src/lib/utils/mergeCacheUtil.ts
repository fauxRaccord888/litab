import type { IConnection } from "$lib/types/graphql";

export function mergeCacheUtil<T extends { cursor: string }>(
    existing: IConnection<T> | undefined | null, 
    incoming: IConnection<T>
) {
    if (!incoming) {
        return existing
    }
    if (!existing) return incoming
    if (incoming?.edges.length === 0) return existing

    const newEdges:T[] = [];
    const visited = new Set();
    const visitedCursors = new Set()

    const edges = [...existing.edges, ...incoming.edges]

    edges.forEach((edge) => {
        if (visited.has(edge.cursor)) return
        visited.add(edge.cursor)
        newEdges.push(edge)
    })

    existing?.edges.forEach((edge) => {
        visitedCursors.add(edge.cursor)
    })

    const keepPageInfo = visitedCursors.has(incoming?.pageInfo?.endCursor) 

    return {
        ...existing,
        ...incoming,
        pageInfo: keepPageInfo ? existing.pageInfo : incoming.pageInfo,
        edges: newEdges
    }
}
