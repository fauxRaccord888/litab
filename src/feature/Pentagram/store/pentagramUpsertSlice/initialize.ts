import type { PayloadAction } from "@reduxjs/toolkit"
import type { DBPentagram } from "$feature/Pentagram/types"
import type { UpdateNodeState } from '.'

import { PENTAGRAM } from "$feature/Pentagram/constants"
import { upsertNode } from "./upsert"

export const initializeStore = (state: UpdateNodeState, action: PayloadAction<{
    mainNodes: DBPentagram["pentagrams_oeuvresCollection"],
    subNodes: DBPentagram["pentagrams_nodesCollection"]
}>) => {
    // CAVEAT COMMENT
    // 클라이언트에는 '인덱스'에 유일성 조건이 없으므로 DB ID를 그대로 쓰면 동일 인덱스에 2개의 자료가 생길 수 있음
    // 하지만 index를 id로 사용하면 전역적으로 고유하지 않음(pending node가 index 사용)
    // 실제로는 별도 offset을 설정할 필요는 없음(pending node는 workingTree에 없이 그 자체로 workingNode 취급)
    // OFFSET 수치를 바꾸는 것 역시 주의(persist되기 떄문에 클라이언트에 'mainNode'가 5개 이상이 됨)

    const { mainNodes, subNodes } = action.payload
    Array.from({length: PENTAGRAM.SIDES}).forEach((_, index) => {
        upsertNode(state, {
            index,
            nodeType: 'main-node',
            oeuvres: null,
            id: String(index + PENTAGRAM.MAIN_NODE_OFFSET ),
        })
    })
    
    mainNodes && mainNodes.edges.forEach((edge) => {
        const { index, oeuvres } = edge.node
        upsertNode(state, {
            index,
            oeuvres,
            id: String(index + PENTAGRAM.MAIN_NODE_OFFSET),
            nodeType: 'main-node',
            originalNode: edge.node,
        })
    })

    subNodes && subNodes.edges.forEach((edge) => {
        const { id, angle, distance, oeuvres } = edge.node
        upsertNode(state, {
            id,
            angle,
            distance,
            oeuvres,
            nodeType: 'sub-node',
            originalNode: edge.node,
        })
    })
}
