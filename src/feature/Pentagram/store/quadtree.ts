import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppRootState } from '$lib/stores/store';
import type { Node, PendingNode } from "./pentagramUpsertSlice/interface";

import { createSlice } from '@reduxjs/toolkit'
import { Quadtree } from '../utils'


const initialRect = {
    x: 0,
    y: 0,
    width: 200,
    height: 200
}
const initialRoot = Quadtree.createNode(initialRect)


const quadtreeSlice = createSlice({
    name: 'quadtree',
    initialState: {
        tree: initialRoot
    },
    reducers: {
        buildQuadtree(state, action: PayloadAction<{nodes: Node[], pendingNodes: PendingNode[]}>) {
            const { nodes, pendingNodes } = action.payload
            const items = [ ...nodes, ...pendingNodes]
            state.tree = Quadtree.createNode(initialRect)
            
            items.forEach((it) => {
                Quadtree.insertNodeByPosition(state.tree, it)
            })
        }
    },
})

export type UpdateNodeState = AppRootState["quadtree"]
export const { buildQuadtree } = quadtreeSlice.actions
export default quadtreeSlice.reducer
