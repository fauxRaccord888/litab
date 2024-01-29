import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalTypes = 
    'ACCOUNT_MENU' | 'OTHER_USER_INTERACTION' | 'FOLLOWER' | 'FOLLOWING' | 'MUTUAL_FOLLOWER' |
    'POST' | 'IDLE'

type ModalViewList = {
    user: {
        mutable_id: string,
        id: string
    }
}

interface ModalState {
    isOpen: boolean
    modalType: ModalTypes
    modalViewUserList: ModalViewList[],
} 

const initialState: ModalState  = {
    isOpen: false,
    modalType: 'IDLE',
    modalViewUserList: [],
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleOpen: (state) => {
            state.isOpen = !(state.isOpen);
        },
        setModalType: (state, action: PayloadAction<ModalTypes>) => {
            state.modalType = action.payload
        },
        setModalViewUserList: (state, action: PayloadAction<ModalViewList[]>) => {
            state.modalViewUserList = action.payload
        }
    }
})

export const { toggleOpen, setModalType, setModalViewUserList } = modalSlice.actions
export default modalSlice.reducer