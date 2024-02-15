import type { Node, PendingNode, WorkingTree, SelectedNode, SelectedPosition } from './interface';
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppRootState } from '$lib/stores/store';
import type { DBOeuvre } from '$feature/Oeuvre/types'
import type { DBPentagram } from '../../types';

import { createSlice, createEntityAdapter  } from '@reduxjs/toolkit'
import { initializeStore } from './initialize';
import { update } from './update';
import { upsert } from './upsert';
import { selectNode, selectPosition, unselectSelected } from './select';
import { abortChanges, mergeChanges, revertChange, upsertUpdateRecord } from './workingTree';

export const nodeAdapter = createEntityAdapter({ selectId: (node: Node) => node.id })
export const pendingNodeAdapter = createEntityAdapter({ selectId: (node: PendingNode) => node.id })
export const workingTreeAdapter = createEntityAdapter({ selectId: (node: WorkingTree) => node.id })

const initialSelectedState: SelectedNode = {
    nodeType: "idle",
    id: null,
}

const initialSelectedPositionState: SelectedPosition = {
    angle: null,
    distance: null
}

const pentagramUpsertSlice = createSlice({
    name: 'pentagramUpsert',
    initialState: {
        selected: initialSelectedState as SelectedNode, // COMMENT 리터럴 타입이 하나로 고정되는 부분 방지
        selectedPosition: initialSelectedPositionState as SelectedPosition,
        node: nodeAdapter.getInitialState(),
        pendingNode: pendingNodeAdapter.getInitialState(),
        workingTree: workingTreeAdapter.getInitialState()
    },
    reducers: {
        initialize(state, action: PayloadAction<{
            nodes: DBPentagram["pentagrams_nodesCollection"]
        }>) {
            initializeStore(state, action)
        },

        upsertPendingNode(state, action: PayloadAction<{oeuvres: DBOeuvre}>) {
            const { nodeType } = state.selected
            const { angle, distance } = state.selectedPosition
            const { oeuvres } = action.payload

            if (
                nodeType === 'idle' &&
                typeof angle === 'number' &&
                typeof distance === 'number'
            ) {
                upsert(state, { nodeType, oeuvres, angle, distance })
                unselectSelected(state)
            }
        },

        updatePosition(state, action: PayloadAction<{ angle: number, distance: number }>) {
            const { id, nodeType } = state.selected
            const { angle, distance } = action.payload
            if (nodeType === 'node' || nodeType === 'pending-node') {
                update(state, { id, angle, distance, nodeType })
                upsertUpdateRecord(state, action)
            }
        },

        // TODO DELETE NODE

        mergeWorkingTree(state) {
            mergeChanges(state)
        },

        clenaWorkingTree(state) {
            abortChanges(state)
        },

        revert(state, payload: PayloadAction<{ id: string }>) {
            revertChange(state, payload)
        },

        unselect(state) {
            unselectSelected(state)
        },

        setSelected(state, action: PayloadAction<
            { id: string, nodeType: "node" | "pending-node" }
        >) {
            unselectSelected(state)
            selectNode(state, action)
        },

        setSelectedPosition(state, action: PayloadAction<{angle: number, distance: number}>) {
            unselectSelected(state)
            selectPosition(state, action)
        }
    },
})

export type UpdateNodeState = AppRootState["pentagramUpsert"]
export const { initialize, upsertPendingNode, updatePosition, mergeWorkingTree, clenaWorkingTree, revert, unselect, setSelected, setSelectedPosition } = pentagramUpsertSlice.actions
export const nodeSelector = nodeAdapter.getSelectors<AppRootState>(state => state.pentagramUpsert.node)
export const pendingNodeSelector = pendingNodeAdapter.getSelectors<AppRootState>(state => state.pentagramUpsert.pendingNode)
export const mainNodeWorkingTreeSelector =  workingTreeAdapter.getSelectors<AppRootState>(state => state.pentagramUpsert.workingTree)
export default pentagramUpsertSlice.reducer
