import type { PayloadAction } from "@reduxjs/toolkit"
import type { UpdateNodeState } from '.'
import { update } from "./update"

export const unselectSelected = (state: UpdateNodeState) => {
    const { id, nodeType } = state.selected
    state.selected = { id: null, nodeType: 'idle' }
    state.selectedPosition = { angle: null, distance: null }

    if (!id) return
    update(state, {id, nodeType, selected: false})
}

export const selectNode = (state: UpdateNodeState, action: PayloadAction<
    { id: string, nodeType: "node" | "pending-node" } 
>) => {
    const { id, nodeType } = action.payload
    update(state, {id, nodeType, selected: true})
    
    state.selected = { id, nodeType }
}

export const selectPosition = (state: UpdateNodeState, action: PayloadAction<{angle: number, distance: number}>) => {
    const { angle, distance } = action.payload
    state.selectedPosition = { angle, distance }
}