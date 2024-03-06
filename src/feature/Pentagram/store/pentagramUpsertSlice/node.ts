import type { DBPentagram_UPDATE } from "$feature/Pentagram/types"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { UpdateNodeState } from "."
import { nodeAdapter } from "."

export const initializeNode = (state: UpdateNodeState, action: PayloadAction<{
    nodes: DBPentagram_UPDATE["pentagram_nodesCollection"] | undefined
}>) => {
    const { nodes } = action.payload
    nodeAdapter.setAll(state.node, [])
    nodes && nodes.edges.forEach((edge) => {
        const { id, angle, distance, deleted, oeuvres } = edge.node
        nodeAdapter.upsertOne(state.node, {
            id,
            angle,
            distance,
            deleted,
            oeuvres,
        })
    })
}
