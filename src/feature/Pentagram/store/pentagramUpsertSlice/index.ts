import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppRootState } from '$lib/stores/store';
import type { DBOeuvre } from '$feature/Oeuvre/types';
import type { DBPentagram } from '../../types';
import type { Node, PendingChange } from './interface';

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { mergeChange } from './mergedNode';
import { initializeNode } from './node';
import { removePendingChanges, upsertPendingChange } from './pendingChange';
import { select, selectPosition } from './select';

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

export const mergedNodeAdapter = createEntityAdapter({ selectId: (node: Node) => node.id })
export const nodeAdapter = createEntityAdapter({ selectId: (node: Node) => node.id })
export const pendingChangeAdapter = createEntityAdapter({ selectId: (change: PendingChange) => change.id })

// pending changes는 렌더링 단계에서 통합됨(별도 hooks)
const pentagramUpsertSlice = createSlice({
    name: 'pentagramUpsert',
    initialState: {
        mergedNode: mergedNodeAdapter.getInitialState(),
        node: nodeAdapter.getInitialState(),
        pendingChange: pendingChangeAdapter.getInitialState(),
        selected: null as SelectedNode, // COMMENT 리터럴 타입이 하나로 고정되는 부분 방지
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
            const { angle, distance } = action.payload

            if (id) {
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
            }
        },

        merge(state, action: PayloadAction<{
            node: null | Node,
            pendingChange: null | PendingChange,
        }>) {
            mergeChange(state, action)
        },

        revertChange(state, payload: PayloadAction<{ id: string }>) {
            removePendingChanges(state, payload)
        },

        cleanChanges(state) {
            state.pendingChange = pendingChangeAdapter.getInitialState()
        },

        setSelected(state, action: PayloadAction<{ id: string }>) {
            select(state, action)
        },

        setSelectedPosition(state, action: PayloadAction<{angle: number, distance: number}>) {
            selectPosition(state, action)
        }
    },
})

export type UpdateNodeState = AppRootState["pentagramUpsert"]
export const { initialize, setPosition, upsertNode, merge, revertChange, cleanChanges, setSelected, setSelectedPosition } = pentagramUpsertSlice.actions
export const nodeSelector = nodeAdapter.getSelectors<AppRootState>(state => state.pentagramUpsert.node)
export const pendingChangeSelector =  pendingChangeAdapter.getSelectors<AppRootState>(state => state.pentagramUpsert.pendingChange)
export const mergedNodeSelector = mergedNodeAdapter.getSelectors<AppRootState>(state => state.pentagramUpsert.mergedNode)
export default pentagramUpsertSlice.reducer
