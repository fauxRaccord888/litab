import type { DBOeuvre } from "$feature/Oeuvre/types"
import type { DBMainNodes, DBSubNodes } from "$feature/Pentagram/types"
import type { UpdateNodeState } from '.'
import type { SelectedNode } from "./interface"
import { mainNodeAdapter, pendingNodeAdapter, subNodeAdapter } from "."

export const updateNode = (
    state: UpdateNodeState, 
    payload: {
        id: string | null, 
        nodeType: SelectedNode["nodeType"], 
        distance?: number | undefined, 
        angle?: number | undefined
        oeuvres?: DBOeuvre | undefined | null // COMMENT 실제 nullable은 MainNode뿐
        originalNode?: DBSubNodes | DBMainNodes | undefined
        selected?: boolean | undefined
    }
) => {
    const { id, nodeType } = payload

    if (nodeType === 'main-node' && id) {
        updateMainNode(state, {...payload, id, nodeType}) // type으로 인해 스프레드 후 재설정
    }

    if (nodeType === 'sub-node' && id) {
        updateSubNode(state, {...payload, id, nodeType})
    }

    if (nodeType === 'pending-node' && id) {
        updatePendingNode(state, {...payload, id, nodeType})
    }
}

const updateMainNode = (
    state: UpdateNodeState, 
    payload: {
        id: string, 
        nodeType: "main-node", 
        oeuvres?: DBOeuvre | undefined | null
        originalNode?: DBSubNodes | DBMainNodes | undefined
        selected?: boolean | undefined
    }
) => {
    const { id, oeuvres, originalNode, selected } = payload
    if (oeuvres || oeuvres === null) {
        mainNodeAdapter.updateOne(state.mainNode, {
            id, changes: { oeuvres }
        })
    }

    if (originalNode && originalNode.__typename === 'pentagrams_oeuvres') {
        mainNodeAdapter.updateOne(state.mainNode, {
            id, changes: { originalNode }
        })
    }

    if (typeof selected === 'boolean') {
        mainNodeAdapter.updateOne(state.mainNode, {
            id, changes: { selected }
        })
    }
}

const updateSubNode = (
    state: UpdateNodeState, 
    payload: {
        id: string , 
        nodeType: "sub-node", 
        distance?: number | undefined, 
        angle?: number | undefined
        oeuvres?: DBOeuvre | undefined | null
        originalNode?: DBSubNodes | DBMainNodes | undefined
        selected?: boolean | undefined
    }
) => {
    const { id, distance, angle, oeuvres, originalNode, selected } = payload

    if (typeof angle === 'number' && typeof distance === 'number') {
        subNodeAdapter.updateOne(state.subNode, {
            id, changes: { angle, distance } 
        })
    }
    if (oeuvres) {
        subNodeAdapter.updateOne(state.subNode, {
            id, changes: { oeuvres }
        })
    }
    if (originalNode && originalNode.__typename === 'pentagrams_nodes') {
        subNodeAdapter.updateOne(state.subNode, {
            id, changes: { originalNode }
        })
    }

    if (typeof selected === 'boolean') {
        subNodeAdapter.updateOne(state.subNode, {
            id, changes: { selected }
        })
    }
}

const updatePendingNode = (
    state: UpdateNodeState, 
    payload: {
        id: string, 
        nodeType: "pending-node", 
        distance?: number | undefined, 
        angle?: number | undefined
        oeuvres?: DBOeuvre | undefined | null
        originalNode?: DBSubNodes | DBMainNodes | undefined
        selected?: boolean | undefined
    }
) => {
    const { id, distance, angle, oeuvres, selected } = payload

    if (typeof angle === 'number' && typeof distance === 'number') {
        pendingNodeAdapter.updateOne(state.pendingNode, {
            id, changes: { angle, distance }
        })
    }
    if (oeuvres) {
        pendingNodeAdapter.updateOne(state.pendingNode, {
            id, changes: { oeuvres }
        })
    }

    if (typeof selected === 'boolean') {
        pendingNodeAdapter.updateOne(state.pendingNode, {
            id, changes: { selected }
        })
    }
}
