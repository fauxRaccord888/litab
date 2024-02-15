import type { DBOeuvre } from "$feature/Oeuvre/types"
import type { DBPentagramsNodes } from "../../types"

export interface Node {
    id: string,
    originalNode: DBPentagramsNodes,
    oeuvres: DBOeuvre,
    angle: number,
    distance: number,
    selected?: boolean,
}

export interface PendingNode {
    id: string,
    oeuvres: DBOeuvre,
    angle: number,
    distance: number,
    selected?: boolean,
}

export type WorkingTree =  (
    | { id: string, nodeType: 'node', type: 'update', angle: number, distance: number, originalNode: DBPentagramsNodes }
    | { id: string, nodeType: 'node', type: 'delete', originalNode: DBPentagramsNodes }
) 

export type SelectedNode = (
    { nodeType: "idle", id: null } 
    | { nodeType: "node", id: string }
    | { nodeType: "pending-node", id: string }  
)

export type SelectedPosition = {
    angle: number,
    distance: number
} | {
    angle: null,
    distance: null
}

