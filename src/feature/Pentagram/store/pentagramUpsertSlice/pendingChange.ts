import type { PayloadAction } from "@reduxjs/toolkit"
import type { UpsertChange, RemoveChange, UpdateChange, RecoverChange } from "./interface"
import type { UpdateNodeState } from "."
import { v4 as uuidv4 } from 'uuid';
import { pendingChangeAdapter } from "."

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
        const id = uuidv4()
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