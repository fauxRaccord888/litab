import type { PayloadAction } from "@reduxjs/toolkit"
import type { DBPentagram } from "$feature/Pentagram/types"
import type { UpdateNodeState } from '.'

import { upsert } from "./upsert"

export const initializeStore = (state: UpdateNodeState, action: PayloadAction<{
    nodes: DBPentagram["pentagrams_nodesCollection"]
}>) => {
    const { nodes } = action.payload

    nodes && nodes.edges.forEach((edge) => {
        const { id, angle, distance, oeuvres } = edge.node
        upsert(state, {
            id,
            angle,
            distance,
            oeuvres,
            nodeType: 'node',
            originalNode: edge.node,
        })
    })
}
