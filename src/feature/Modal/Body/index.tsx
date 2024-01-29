import { useSelector } from "react-redux"

import type { AppRootState } from "$lib/stores/store"

import FollowerModal from "./FollowerModal"

export default function Body() {
    const { modalType } = useSelector((state: AppRootState) => state.modal)
    if (modalType === 'FOLLOWER') return <FollowerModal />
    return <></>
}
