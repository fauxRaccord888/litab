import type { PayloadAction } from "@reduxjs/toolkit"
import type { Node, PendingChange, UpdateChange } from './interface'
import type { UpdateNodeState } from "."
import { mergedNodeAdapter } from "."

type NodePayload = {
    node: null | Node,
    pendingChange: null | PendingChange,    
}

export const mergeChange = (state: UpdateNodeState, action: PayloadAction<NodePayload>) => {
    const { node, pendingChange } = action.payload

    if (node && !pendingChange) {
        upsert(state, { node })
    }

    if (pendingChange?.changeType === 'upsert') {
        upsert(state, { node: pendingChange })
    }    

    if (pendingChange?.changeType === 'update' && node) {
        update(state, { node, pendingChange })
    }

    if (pendingChange?.changeType === 'remove') {
        remove(state,pendingChange.id)
    }
}

interface UpdatePayload {
    node: Node,
    pendingChange: UpdateChange,
}

const update = (state: UpdateNodeState, payload: UpdatePayload) => {
    const { node, pendingChange } = payload
    const { angle, distance } = pendingChange

    mergedNodeAdapter.upsertOne(state.mergedNode, {
        ...node,
        angle,
        distance
    })
}

type UpsertPayload = {
    node: Node
}

const upsert = (state: UpdateNodeState, payload: UpsertPayload) => {
    const { node } = payload
    mergedNodeAdapter.upsertOne(state.mergedNode, {...node})
}

const remove = (state: UpdateNodeState, payload: string) => {
    mergedNodeAdapter.removeOne(state.mergedNode, payload)
}