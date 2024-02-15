import type { DBOeuvre } from "$feature/Oeuvre/types"
import type { UpdateNodeState } from '.'
import { pendingNodeAdapter, nodeAdapter } from "."

interface UpdatePayload {
    id: string , 
    distance?: number | undefined, 
    angle?: number | undefined
    selected?: boolean | undefined
}

type UpdateNodePayload = UpdatePayload & {
    nodeType: "node", 
}

type UpdatePendingNodePayload = UpdatePayload & {
    nodeType: "pending-node", 
    oeuvres?: DBOeuvre | undefined | null
}

export const update = (
    state: UpdateNodeState, 
    payload: UpdateNodePayload | UpdatePendingNodePayload
) => {
    const { id, nodeType } = payload

    if (nodeType === 'node' && id) {
        updateNode(state, payload)
    }

    if (nodeType === 'pending-node' && id) {
        updatePendingNode(state, payload)
    }
}

const updateNode = (
    state: UpdateNodeState, 
    payload: UpdateNodePayload
) => {
    const { id, distance, angle, selected } = payload

    if (typeof angle === 'number' && typeof distance === 'number') {
        nodeAdapter.updateOne(state.node, {
            id, changes: { angle, distance } 
        })
    }
    if (typeof selected === 'boolean') {
        nodeAdapter.updateOne(state.node, {
            id, changes: { selected }
        })
    }
}

const updatePendingNode = (
    state: UpdateNodeState, 
    payload: UpdatePendingNodePayload
) => {
    const { id, distance, angle, oeuvres, selected } = payload

    if (typeof angle === 'number' && typeof distance === 'number') {
        pendingNodeAdapter.updateOne(state.pendingNode, {
            id, changes: { angle, distance }
        })
    }
    if (oeuvres) {
        pendingNodeAdapter.updateOne(state.pendingNode, {
            id, changes: { oeuvres }
        })
    }
    if (typeof selected === 'boolean') {
        pendingNodeAdapter.updateOne(state.pendingNode, {
            id, changes: { selected }
        })
    }
}
