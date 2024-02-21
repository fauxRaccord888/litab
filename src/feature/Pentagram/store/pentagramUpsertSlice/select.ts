import type { PayloadAction } from "@reduxjs/toolkit"
import type { UpdateNodeState } from "."

export function select(state: UpdateNodeState, action: PayloadAction<{ id: string }>) {
    unselect(state)
    state.selected = action.payload.id
}

export function selectPosition(state: UpdateNodeState, action: PayloadAction<{angle: number, distance: number}>) {
    unselect(state)
    state.selectedPosition = action.payload
}

export function unselect(state: UpdateNodeState) {
    state.selected = null
    state.selectedPosition = { angle: null, distance: null }
}

