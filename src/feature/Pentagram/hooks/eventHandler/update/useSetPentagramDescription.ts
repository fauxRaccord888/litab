import type { ChangeEvent } from "react"
import { useDispatch } from "react-redux"
import { setDescription } from "$feature/Pentagram/store/pentagramUpsertSlice"

export function useSetPentagramDescription() {    
    const dispatch = useDispatch()
    const handleSetDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setDescription(e.target.value))
    }

    return { handleSetDescription }
}