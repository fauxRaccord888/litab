import type { PayloadAction } from "@reduxjs/toolkit"
import type { UpdateNodeState } from "."

import { update } from "./update"
import { pendingNodeAdapter, workingTreeAdapter } from "."

export const mergeChanges = (state: UpdateNodeState) => {
    const ids = state.workingTree.ids
    ids.forEach((id) => {
        const change = state.workingTree.entities[id]
        if (!change) return
        if (change.type === 'update') update(state, change)
        // TODO DELETE
        if (change.type === 'delete') () => {}
    })
}

export const abortChanges = (state: UpdateNodeState) => {
    workingTreeAdapter.removeAll(state.workingTree)
    pendingNodeAdapter.removeAll(state.pendingNode)
}

export const revertChange = (state: UpdateNodeState, action: PayloadAction<{id: string}>) => {
    const { id } = action.payload
    const change = state.workingTree.entities[id]
    if (!change) return

    // TODO 예약어 사용 리팩토링
    const { type, nodeType } = change

    if (type === 'update') {
        const { angle, distance } = change.originalNode
        update(state, {id, nodeType, angle, distance})
    }

    // TODO Delete

    workingTreeAdapter.removeOne(state.workingTree, id)
}

export const upsertUpdateRecord = (state: UpdateNodeState, action: PayloadAction<{distance: number, angle: number}>) => {
    const { distance, angle } = action.payload
    const { nodeType, id } = state.selected

    if (nodeType === 'node') {
        const data = state.node.entities[id]
        if (data) {
            workingTreeAdapter.upsertOne(state.workingTree, {
                id,
                distance,
                angle,
                type: 'update',
                nodeType: 'node',
                originalNode: data.originalNode,
            })
        }
    }
}