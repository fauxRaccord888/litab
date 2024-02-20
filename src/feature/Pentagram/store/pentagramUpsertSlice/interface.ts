import type { DBOeuvre } from "$feature/Oeuvre/types"

export interface Node {
    id: string,
    oeuvres: DBOeuvre,
    angle: number,
    distance: number,
}

export type PendingChange = (UpsertChange | UpdateChange | RemoveChange) 

export type UpsertChange = { id: string, changeType: 'upsert', angle: number, distance: number, oeuvres: DBOeuvre, selected?: boolean }
export type UpdateChange = { id: string, changeType: 'update', angle: number, distance: number, selected?: boolean }
export type RemoveChange = { id: string, changeType: 'remove' }