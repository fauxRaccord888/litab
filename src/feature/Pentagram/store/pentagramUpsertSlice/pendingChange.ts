import type { PayloadAction } from "@reduxjs/toolkit"
import type { UpsertChange, RemoveChange, UpdateChange, RecoverChange } from "./interface"
import type { UpdateNodeState } from "."
import { pendingChangeAdapter } from "."
import { PENTAGRAM } from "../../constants"

type UpsertChangePayload = (
    Omit<UpsertChange, "id"> |
    RemoveChange | 
    UpdateChange | 
    RecoverChange
)

type UpdateChangePayload = {
    id: string,
    angle: number,
    distance: number,
}

export const upsertPendingChange = (state: UpdateNodeState, action: PayloadAction<UpsertChangePayload>) => {
    const { changeType } = action.payload

    if ( changeType === 'remove' || changeType === 'update' || changeType === 'recover') {
        pendingChangeAdapter.upsertOne(state.pendingChange, action.payload)
    }

    if ( changeType === 'upsert' ) {
        const id =  String(state.pendingChange.ids.length + PENTAGRAM.PENDING_NODE_OFFSET)
        pendingChangeAdapter.upsertOne(state.pendingChange, { id, ...action.payload })
    }
}

export const updatePendingChange = (state: UpdateNodeState, action: PayloadAction<UpdateChangePayload>) => {
    const { id, angle, distance } = action.payload

    pendingChangeAdapter.updateOne(state.pendingChange, {
        id, 
        changes: {
            angle,
            distance
        }
    })
}

export const removePendingChanges = (state: UpdateNodeState, action: PayloadAction<{id: string}>) => {
    pendingChangeAdapter.removeOne(state.pendingChange, action.payload.id)
}