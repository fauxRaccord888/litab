import type { DBMiniOeuvre } from "$feature/Oeuvre/types"

export interface INode {
    id: string
    oeuvre: DBMiniOeuvre,
    angle: number,
    distance: number,
    deleted?: boolean | null
}

export interface IMergedNode extends INode {
    selected?: boolean
}

export type IPendingChange = (UpsertChange | UpdateChange | RemoveChange | RecoverChange) 


type ChangeBase = { id: string, oeuvre: DBMiniOeuvre }
export type UpsertChange = ChangeBase & { changeType: 'upsert', angle: number, distance: number }
export type UpdateChange = ChangeBase & { changeType: 'update', angle: number, distance: number }
export type RemoveChange = ChangeBase & { changeType: 'remove', deleted: true }
export type RecoverChange= ChangeBase & { changeType: 'recover', deleted: false, angle: number, distance: number }

export type IUnmergedChangeInfo<T = IPendingChange> = {
    id: string
    node: INode,
    change: T
}
