import type { DBOeuvre } from "$feature/Oeuvre/types"

export interface INode {
    id: string
    oeuvres: DBOeuvre,
    angle: number,
    distance: number,
}

export interface IMergedNode extends INode {
    deleted?: boolean,
    selected?: boolean
}

export type IPendingChange = (UpsertChange | UpdateChange | RemoveChange) 

export type UpsertChange = { id: string, changeType: 'upsert', angle: number, distance: number, oeuvres: DBOeuvre }
export type UpdateChange = { id: string, changeType: 'update', angle: number, distance: number }
export type RemoveChange = { id: string, changeType: 'remove' }

export type IUnmergedChangeInfo = {
    id: string
    node: INode,
    change: IPendingChange
}
