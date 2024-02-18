import type { DBOeuvre } from "$feature/Oeuvre/types"
import type { DBPentagramsNodes } from "$feature/Pentagram/types"
import type { UpdateNodeState } from "."

import { PENTAGRAM } from "$feature/Pentagram/constants"
import { pendingNodeAdapter, nodeAdapter } from "."

interface UpsertPayload {
    distance: number
    angle: number
    oeuvres: DBOeuvre
}

type UpsertNodePayload = UpsertPayload & {
    id: string
    nodeType: "node"
    originalNode: DBPentagramsNodes
}

type UpsertPendingNodePayload = UpsertPayload & {
    nodeType: "idle"
}

export const upsert = (
    state: UpdateNodeState, 
    payload: UpsertNodePayload | UpsertPendingNodePayload
) => {
    const { nodeType } = payload
    if (nodeType === 'node') {
        upsertNode(state, payload)
    }

    if (nodeType === 'idle') {
        upsertPendingNode(state, payload)
    }
}

const upsertNode = (
    state: UpdateNodeState, 
    payload: UpsertNodePayload
) => {
    const { id, oeuvres, angle, distance, originalNode } = payload
    nodeAdapter.upsertOne(state.node, {
        id,
        angle,
        distance,
        oeuvres,
        originalNode
    })
}

const upsertPendingNode = (
    state: UpdateNodeState, 
    payload: UpsertPendingNodePayload
) => {
    const { oeuvres, angle, distance } = payload
    
    const id =  String(state.pendingNode.ids.length + PENTAGRAM.PENDING_NODE_OFFSET)
    pendingNodeAdapter.upsertOne(state.pendingNode, {
        id,
        oeuvres,
        angle,
        distance,
    })
}