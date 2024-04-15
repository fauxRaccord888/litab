import type { AppRootState } from '$lib/stores/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ModalSliceState = {
    nodeUpsertId?: string | undefined
    insertNode?: boolean | undefined
    pentagramMenuId?: string | undefined
    nodeViewId?: string | undefined
    revisionViewId?: string | undefined
    accountMenu?: boolean | undefined
    register?: boolean | undefined
    signIn?: boolean | undefined
    metaData?: boolean | undefined
}

const initialState = {
    nodeUpsertId: undefined,
    insertNode: undefined,
    pentagramMenuId: undefined,
    nodeViewId: undefined,
    revisionViewId: undefined,
    accountMenu: undefined,
    register: undefined,
    signIn: undefined,
    metaData: undefined
} satisfies ModalSliceState

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState as ModalSliceState,
    reducers: {
        closeModal() {
            return initialState
        },

        setNodeUpsertId(_, action: PayloadAction<string>) {
            return {
                ...initialState,
                nodeUpsertId: action.payload
            }
        },

        setInsertNode() {
            return {
                ...initialState,
                insertNode: true
            }
        },

        setPentagramMenuId(_, action: PayloadAction<string>) {
            return {
                ...initialState,
                pentagramMenuId: action.payload
            }
        },

        setNodeViewId(_, action: PayloadAction<string>) {
            return {
                ...initialState,
                nodeViewId: action.payload
            }
        },
        
        setRevisionViewId(_, action: PayloadAction<string>) {
            return {
                ...initialState,
                revisionViewId: action.payload
            }
        },

        setAccountMenu() {
            return {
                ...initialState,
                accountMenu: true
            }
        },

        setRegister() {
            return {
                ...initialState,
                register: true
            }
        },

        setSignIn() {
            return {
                ...initialState,
                signIn: true
            }
        },

        setMetaData() {
            return {
                ...initialState,
                metaData: true
            }
        }
    },
})

export type AuthState = AppRootState["modal"]
export const { 
    closeModal, 
    setNodeUpsertId, 
    setInsertNode, 
    setPentagramMenuId, 
    setNodeViewId, 
    setRevisionViewId, 
    setAccountMenu, 
    setRegister, 
    setSignIn,
    setMetaData
} = modalSlice.actions
export default modalSlice.reducer
