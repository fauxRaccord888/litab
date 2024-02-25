import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppRootState } from '$lib/stores/store';
import type { DBOeuvre } from '$feature/Oeuvre/types';
import type { DBPentagram } from '../../types';
import type { IMergedNode, IPendingChange } from './interface';

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { mergeChange } from './mergedNode';
import { initializeNode } from './node';
import { removePendingChanges, updatePendingChange, upsertPendingChange } from './pendingChange';
import { select, selectPosition, unselect } from './select';

type SelectedNode = null | string

type SelectedPosition = {
    angle: number,
    distance: number
} | {
    angle: null,
    distance: null
}

const initialSelectedPositionState: SelectedPosition = {
    angle: null,
    distance: null
}

export const mergedNodeAdapter = createEntityAdapter({ selectId: (node: IMergedNode) => node.id })
export const nodeAdapter = createEntityAdapter({ selectId: (node: IMergedNode) => node.id })
export const pendingChangeAdapter = createEntityAdapter({ selectId: (change: IPendingChange) => change.id })

const pentagramUpsertSlice = createSlice({
    name: 'pentagramUpsert',
    initialState: {
        mergedNode: mergedNodeAdapter.getInitialState(),
        node: nodeAdapter.getInitialState(),
        pendingChange: pendingChangeAdapter.getInitialState(),
        selected: null as SelectedNode,
        selectedPosition: initialSelectedPositionState as SelectedPosition,
    },
    reducers: {
        initialize(state, action: PayloadAction<{
            nodes: DBPentagram["pentagrams_nodesCollection"]
        }>) {
            initializeNode(state, action)
        },

        setPosition(state, action: PayloadAction<{ angle: number, distance: number }>) {
            const id = state.selected
            const change = id ? state.pendingChange.entities[id] : null
            const { angle, distance } = action.payload

            if (!id) {
                selectPosition(state, action)
            }

            if (id && !change) {
                upsertPendingChange(state, { 
                    type: 'string',
                    payload: {
                        id,
                        angle,
                        distance,
                        changeType: 'update'
                    }
                })
            }

            if (id && change) {
                updatePendingChange(state, { 
                    type: 'string',
                    payload: {
                        id,
                        angle,
                        distance,
                    }
                })
            }
        },

        upsertNode(state, action: PayloadAction<{ oeuvres: DBOeuvre }>) {
            const selected = state.selected
            const { angle, distance } = state.selectedPosition
            const { oeuvres } = action.payload

            if (
                !selected && 
                oeuvres &&
                typeof angle === 'number' &&
                typeof distance === 'number' 
            ) {
                upsertPendingChange(state, { 
                    type: 'string',
                    payload: {
                        angle,
                        distance,
                        oeuvres,
                        changeType: "upsert" 
                    }
                })
                unselect(state)
            }
        },

        removeNode(state, action: PayloadAction<{ id: string }>) {
            const { id } = action.payload
            const node = id ? state.node.entities[id] : null

            if (node) {
                upsertPendingChange(state, {
                    type: 'string',
                    payload: {
                        id,
                        changeType: 'remove'
                    }
                })
            }

            if (!node) {
                removePendingChanges(state, action)
            }
        },

        merge(state, action: PayloadAction<{
            id: string,
            node: null | IMergedNode,
            pendingChange: null | IPendingChange,
        }>) {
            mergeChange(state, action)
        },

        revertChange(state, action: PayloadAction<{ id: string }>) {
            removePendingChanges(state, action)
            unselect(state)
        },

        cleanChanges(state) {
            state.pendingChange = pendingChangeAdapter.getInitialState()
        },

        unselectSelected(state) {
            unselect(state)
        },

        setSelected(state, action: PayloadAction<{ id: string }>) {
            select(state, action)
        },
    },
})

export type UpdateNodeState = AppRootState["pentagramUpsert"]
export const { initialize, setPosition, upsertNode, removeNode, merge, revertChange, cleanChanges, unselectSelected, setSelected } = pentagramUpsertSlice.actions
export const nodeSelector = nodeAdapter.getSelectors<AppRootState>(state => state.pentagramUpsert.node)
export const pendingChangeSelector =  pendingChangeAdapter.getSelectors<AppRootState>(state => state.pentagramUpsert.pendingChange)
export const mergedNodeSelector = mergedNodeAdapter.getSelectors<AppRootState>(state => state.pentagramUpsert.mergedNode)
export default pentagramUpsertSlice.reducer
