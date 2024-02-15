import type { DBOeuvre } from "$feature/Oeuvre/types"
import type { DBMainNodes, DBSubNodes } from "$feature/Pentagram/types"
import type { UpdateNodeState } from "."

import { PENTAGRAM } from "$feature/Pentagram/constants"
import { mainNodeAdapter, pendingNodeAdapter, subNodeAdapter } from "."

type UpsertPayload = (
    {
        id: string
        nodeType: "main-node"
        oeuvres: DBOeuvre | null
        index: number
        originalNode?: DBMainNodes | undefined
    } |
    {
        id: string
        nodeType: "sub-node"
        distance: number
        angle: number
        oeuvres: DBOeuvre
        originalNode: DBSubNodes
    } |
    {
        nodeType: "pending-node" | "idle"
        distance: number
        angle: number
        oeuvres: DBOeuvre
    }
)

export const upsertNode = (
    state: UpdateNodeState, 
    payload: UpsertPayload
) => {
    
    const { nodeType } = payload
    if (nodeType === 'main-node') {
        const { id, oeuvres, index, originalNode } = payload

        if (
            id && 
            typeof index === 'number' && 
            (oeuvres || oeuvres === null) && 
            (originalNode?.__typename === 'pentagrams_oeuvres' || typeof originalNode === 'undefined') 
        ) {
            mainNodeAdapter.upsertOne(state.mainNode, {
                id,
                index,
                oeuvres,
                originalNode
            })
        }
    }

    if (nodeType === 'sub-node') {
        const { id, oeuvres, angle, distance, originalNode } = payload

        if (
            id && 
            oeuvres && 
            typeof angle === 'number' && 
            typeof distance === 'number' && 
            originalNode?.__typename === 'pentagrams_nodes' 
        ) {
            subNodeAdapter.upsertOne(state.subNode, {
                id,
                angle,
                distance,
                oeuvres,
                originalNode
            })
        }
    }

    if (nodeType === 'idle') {
        const { oeuvres, angle, distance } = payload

        if (typeof angle === 'number' && typeof distance === 'number' && oeuvres) {
            pendingNodeAdapter.upsertOne(state.pendingNode, {
                oeuvres,
                angle,
                distance,
                id: String(state.pendingNode.ids.length + PENTAGRAM.PENDING_NODE_OFFSET)
            })
        }
    }
}