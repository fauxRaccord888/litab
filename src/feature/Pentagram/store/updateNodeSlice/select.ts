import type { PayloadAction } from "@reduxjs/toolkit"
import type { UpdateNodeState } from '.'
import { updateNode } from "./update"

export const unselectSelected = (state: UpdateNodeState) => {
    const { id, nodeType } = state.selected
    state.selected = { id: null, index: null, nodeType: 'idle' }
    state.selectedPosition = { angle: null, distance: null }

    if (!id) return
    updateNode(state, {id, nodeType, selected: false})
}

export const selectNode = (state: UpdateNodeState, action: PayloadAction<
    { id: string, nodeType: "sub-node" | "pending-node" } 
    | { id: string, nodeType: "main-node", index: number}
>) => {
    const { id, nodeType } = action.payload
    updateNode(state, {id, nodeType, selected: true})
    
    if (nodeType === 'main-node') state.selected = { id, nodeType, index: action.payload.index }
    else state.selected = { id, nodeType, index: null }
}

export const selectPosition = (state: UpdateNodeState, action: PayloadAction<{angle: number, distance: number}>) => {
    const { angle, distance } = action.payload
    state.selectedPosition = { angle, distance }
}