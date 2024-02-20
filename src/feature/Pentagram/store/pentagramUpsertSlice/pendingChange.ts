import type { PayloadAction } from "@reduxjs/toolkit"
import type { RemoveChange, UpdateChange } from "./interface"
import type { DBOeuvre } from "$feature/Oeuvre/types"
import type { UpdateNodeState } from "."
import { pendingChangeAdapter } from "."
import { PENTAGRAM } from "$feature/Pentagram/constants"

type PendingChangePayload = (
    {
        changeType: 'upsert',
        angle: number,
        distance: number,
        oeuvres: DBOeuvre
    } |
    RemoveChange | 
    UpdateChange
)

export const upsertPendingChange = (state: UpdateNodeState, action: PayloadAction<PendingChangePayload>) => {
    const { changeType } = action.payload

    if ( changeType === 'remove' || changeType === 'update' ) {
        pendingChangeAdapter.upsertOne(state.pendingChange, action.payload)
    }

    if ( changeType === 'upsert' ) {
        const id =  String(state.pendingChange.ids.length + PENTAGRAM.PENDING_NODE_OFFSET)
        pendingChangeAdapter.upsertOne(state.pendingChange, { id, ...action.payload })
    }
}

export const removePendingChanges = (state: UpdateNodeState, action: PayloadAction<{id: string}>) => {
    pendingChangeAdapter.removeOne(state.pendingChange, action.payload.id)
}