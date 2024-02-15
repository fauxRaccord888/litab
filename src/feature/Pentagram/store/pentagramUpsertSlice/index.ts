import type { MainNode, SubNode, PendingNode, WorkingTree, SelectedNode, SelectedPosition } from './interface';
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppRootState } from '$lib/stores/store';
import type { DBOeuvre } from '$feature/Oeuvre/types'
import type { DBPentagram } from '../../types';

import { createSlice, createEntityAdapter  } from '@reduxjs/toolkit'
import { initializeStore } from './initialize';
import { updateNode } from './update';
import { upsertNode } from './upsert';
import { selectNode, selectPosition, unselectSelected } from './select';
import { abortChanges, mergeChanges, revertChange, updateSelectedOeuvreWokringTree, updateSelectedPositionWorkingTree } from './workingTree';

export const mainNodeAdapter = createEntityAdapter({ selectId: (node: MainNode) => node.id })
export const subNodeAdapter = createEntityAdapter({ selectId: (node: SubNode) => node.id })
export const pendingNodeAdapter = createEntityAdapter({ selectId: (node: PendingNode) => node.id })
export const workingTreeAdapter = createEntityAdapter({ selectId: (node: WorkingTree) => node.id })

const initialSelectedState: SelectedNode = {
    nodeType: "idle",
    id: null,
    index: null
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
        mainNode: mainNodeAdapter.getInitialState(),
        subNode: subNodeAdapter.getInitialState(),
        pendingNode: pendingNodeAdapter.getInitialState(),
        workingTree: workingTreeAdapter.getInitialState()
    },
    reducers: {
        initialize(state, action: PayloadAction<{
            mainNodes: DBPentagram["pentagrams_oeuvresCollection"],
            subNodes: DBPentagram["pentagrams_nodesCollection"]
        }>) {
            initializeStore(state, action)
        },

        updateOeuvre(state, action: PayloadAction<{oeuvres: DBOeuvre}>) {
            const { id, nodeType } = state.selected
            const { angle, distance } = state.selectedPosition
            const { oeuvres } = action.payload
            updateNode(state, { id, nodeType, oeuvres })
            if (
                nodeType === 'idle' && 
                typeof angle === 'number' && 
                typeof distance === 'number'
            ) {
                upsertNode(state, { nodeType, oeuvres, angle, distance })
            }
            updateSelectedOeuvreWokringTree(state, action)
            unselectSelected(state)
        },

        updatePosition(state, action: PayloadAction<{ angle: number, distance: number }>) {
            const { id, nodeType } = state.selected
            const { angle, distance } = action.payload
            updateNode(state, { id, angle, distance, nodeType })
            updateSelectedPositionWorkingTree(state, action)
        },

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
            { id: string, nodeType: "sub-node" | "pending-node" }
            | { id: string, nodeType: "main-node", index: number}
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
export const { initialize, updateOeuvre, updatePosition, mergeWorkingTree, clenaWorkingTree, revert, unselect, setSelected, setSelectedPosition } = pentagramUpsertSlice.actions
export const mainNodeSelector = mainNodeAdapter.getSelectors<AppRootState>(state => state.pentagramUpsert.mainNode)
export const subNodeSelector = subNodeAdapter.getSelectors<AppRootState>(state => state.pentagramUpsert.subNode)
export const pendingNodeSelector = pendingNodeAdapter.getSelectors<AppRootState>(state => state.pentagramUpsert.pendingNode)
export const mainNodeWorkingTreeSelector =  workingTreeAdapter.getSelectors<AppRootState>(state => state.pentagramUpsert.workingTree)
export default pentagramUpsertSlice.reducer
