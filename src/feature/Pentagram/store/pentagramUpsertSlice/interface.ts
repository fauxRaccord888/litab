import type { DBOeuvre } from "$feature/Oeuvre/types"
import type { DBMainNodes, DBSubNodes } from "../../types"

export interface MainNode {
    id: string
    index: number 
    originalNode?: DBMainNodes
    oeuvres: DBOeuvre | null
    selected?: boolean
}

export interface SubNode {
    id: string,
    originalNode: DBSubNodes,
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
    { id: string, nodeType: 'main-node', type: 'upsert', oeuvres: DBOeuvre, index: number } 
    | { id: string, nodeType: 'main-node', type: 'update', oeuvres: DBOeuvre, originalNode: DBMainNodes}
    | { id: string, nodeType: 'sub-node', type: 'update', oeuvres?: DBOeuvre, angle?: number, distance?: number, originalNode: DBSubNodes }
    | { id: string, nodeType: 'sub-node', type: 'delete', originalNode: DBSubNodes }
) 

export type SelectedNode = (
    { nodeType: "idle", id: null, index: null } 
    | { nodeType: "pending-node", id: string, index: null }  
    | { nodeType: "main-node", id: string, index: number }
    | { nodeType: "sub-node", id: string, index: null }
)

export type SelectedPosition = {
    angle: number,
    distance: number
} | {
    angle: null,
    distance: null
}

