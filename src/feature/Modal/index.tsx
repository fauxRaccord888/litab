import { useSelector } from "react-redux"

import type { AppRootState } from "$lib/stores/store"
import Body from "./Body"

export default function Modal() {
    const { isOpen } = useSelector((state: AppRootState) => state.modal)

    return (
        <div>
            {isOpen && <Body />}
        </div>
    )
}
