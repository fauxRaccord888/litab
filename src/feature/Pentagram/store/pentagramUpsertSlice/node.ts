import type { DBPentagram_UPDATE } from "$feature/Pentagram/types"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { UpdateNodeState } from "."
import { nodeAdapter } from "."
import { getSnapshot, getUnionedChanges } from "../../utils"

export const initializeNode = (state: UpdateNodeState, action: PayloadAction<{
    nodes: DBPentagram_UPDATE["pentagram_nodesCollection"] | undefined
}>) => {
    const { nodes } = action.payload
    nodeAdapter.setAll(state.node, [])
    nodes && nodes.edges.forEach((edge) => {
        const { id, oeuvres } = edge.node
        const unionedChanges = getUnionedChanges(edge.node)
        const { angle, distance, deleted } = getSnapshot(unionedChanges, new Date())
        if (typeof angle !== 'number' || typeof distance !== 'number') return
        nodeAdapter.upsertOne(state.node, {
            id,
            angle,
            distance,
            deleted,
            oeuvres,
        })
    })
}
