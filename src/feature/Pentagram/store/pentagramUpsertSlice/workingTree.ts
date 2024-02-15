import type { DBOeuvre } from "$feature/Oeuvre/types"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { UpdateNodeState } from "."

import { updateNode } from "./update"
import { upsertNode } from "./upsert"
import { pendingNodeAdapter, workingTreeAdapter } from "."

export const mergeChanges = (state: UpdateNodeState) => {
    const ids = state.workingTree.ids
    ids.forEach((id) => {
        const change = state.workingTree.entities[id]
        if (!change) return
        if (change.type === 'update') updateNode(state, change)
        if (change.type === 'upsert') upsertNode(state, change)
    })
}

export const abortChanges = (state: UpdateNodeState) => {
    workingTreeAdapter.removeAll(state.workingTree)
    pendingNodeAdapter.removeAll(state.pendingNode)
}

export const revertChange = (state: UpdateNodeState, action: PayloadAction<{id: string}>) => {
    const { id } = action.payload
    const change = state.workingTree.entities[id]

    if (change.nodeType === 'main-node') {
        const nodeType = 'main-node'
        if (change.type === 'upsert') {
            updateNode(state, {id, nodeType, oeuvres: null})
        }
        if (change.type === 'update') {
            const { oeuvres } = change.originalNode
            updateNode(state, {id, nodeType, oeuvres})
        }
    }

    if (change.nodeType === 'sub-node') {
        const nodeType = 'sub-node'
        if (change.type === 'update') {
            const { oeuvres, angle, distance } = change.originalNode
            updateNode(state, {id, nodeType, oeuvres, angle, distance})
        }
    }

    workingTreeAdapter.removeOne(state.workingTree, id)
}

export const updateSelectedPositionWorkingTree = (state: UpdateNodeState, action: PayloadAction<{distance: number, angle: number}>) => {
    const { distance, angle } = action.payload
    const { nodeType, id } = state.selected

    if (nodeType === 'sub-node') {
        const data = state.subNode.entities[id]
        if (data) {
            workingTreeAdapter.upsertOne(state.workingTree, {
                id,
                distance,
                angle,
                type: 'update',
                nodeType: 'sub-node',
                originalNode: data.originalNode,
            })
        }
    }
}


export const updateSelectedOeuvreWokringTree = (state: UpdateNodeState, action: PayloadAction<{ oeuvres: DBOeuvre }>) => {
    const { oeuvres } = action.payload
    const { nodeType, id, index } = state.selected

    if (nodeType === 'main-node') {
        const { originalNode } = state.mainNode.entities[id]
        if (originalNode) {
            workingTreeAdapter.upsertOne(state.workingTree, {
                id,
                originalNode,
                oeuvres,
                nodeType,
                type: 'update',
            })
        }
        if (!originalNode) {
            workingTreeAdapter.upsertOne(state.workingTree, {
                id,
                index,
                oeuvres,
                nodeType,
                type: 'upsert',
            })
        }
    }

    if (nodeType === 'sub-node') {
        const data = state.subNode.entities[id]
        if (data) {
            workingTreeAdapter.upsertOne(state.workingTree, {
                id,
                oeuvres,
                nodeType,
                originalNode: data.originalNode,
                type: 'update',
            })
        }
    }
}
