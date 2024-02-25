import type { PayloadAction } from "@reduxjs/toolkit"
import type { IMergedNode, IPendingChange, UpdateChange } from './interface'
import type { UpdateNodeState } from "."
import { mergedNodeAdapter } from "."

type NodePayload = {
    id: string,
    node: null | IMergedNode,
    pendingChange: null | IPendingChange,    
}

export const mergeChange = (state: UpdateNodeState, action: PayloadAction<NodePayload>) => {
    const { id, node, pendingChange } = action.payload

    if (node && !pendingChange) {
        set(state, { node })
    }

    if (pendingChange?.changeType === 'upsert') {
        set(state, { node: pendingChange })
    }

    if (pendingChange?.changeType === 'update' && node) {
        update(state, { node, pendingChange })
    }

    if (pendingChange?.changeType === 'remove' && node) {
        set(state, { node: {...node, deleted: true}})
    }

    if (!node && !pendingChange) {
        remove(state, id)
    }

    if (pendingChange?.changeType === 'update' && !node) {
        remove(state, id)
    }

    if (pendingChange?.changeType === 'remove' && !node) {
        remove(state, id)
    }
}

interface UpdatePayload {
    node: IMergedNode,
    pendingChange: UpdateChange,
}

const update = (state: UpdateNodeState, payload: UpdatePayload) => {
    const { node, pendingChange } = payload
    const { angle, distance } = pendingChange
    const selectedId = state.selected
    mergedNodeAdapter.upsertOne(state.mergedNode, {
        ...node,
        angle,
        distance,
        selected: node.id === selectedId
    })
}

type UpsertPayload = {
    node: IMergedNode
}

const set = (state: UpdateNodeState, payload: UpsertPayload) => {
    const { node } = payload
    const selectedId = state.selected

    mergedNodeAdapter.setOne(state.mergedNode, {
        ...node,
        selected: node.id === selectedId
    })
}

const remove = (state: UpdateNodeState, payload: string) => {
    mergedNodeAdapter.removeOne(state.mergedNode, payload)
}