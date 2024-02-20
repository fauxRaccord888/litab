import type { DBPentagram } from "$feature/Pentagram/types"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { UpdateNodeState } from "."
import { nodeAdapter } from "."

export const initializeNode = (state: UpdateNodeState, action: PayloadAction<{
    nodes: DBPentagram["pentagrams_nodesCollection"]
}>) => {
    const { nodes } = action.payload

    nodes && nodes.edges.forEach((edge) => {
        const { id, angle, distance, oeuvres } = edge.node
        nodeAdapter.upsertOne(state.node, {
            id,
            angle,
            distance,
            oeuvres,
        })
    })
}
