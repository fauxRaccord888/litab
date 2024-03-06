import type { PayloadAction } from "@reduxjs/toolkit"
import type { IMergedNode, IPendingChange } from './interface'
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
        set(state, { node : { ...node, ...pendingChange }})
    }

    if (pendingChange?.changeType === 'remove' && node) {
        set(state, { node: {...node, deleted: true}})
    }

    if (pendingChange?.changeType === 'recover' && node) {
        set(state, { node: {...node, ...pendingChange, deleted: false}})
    }

    if (!node && (
            !pendingChange ||
            pendingChange?.changeType === 'update' ||
            pendingChange?.changeType === 'remove' ||
            pendingChange?.changeType === 'recover'
        )
    ) {
        remove(state, id)
    }
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