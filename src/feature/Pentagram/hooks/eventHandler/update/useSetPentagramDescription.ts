import type { AppRootState } from "$lib/stores/store"
import type { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setDescription } from "$feature/Pentagram/store/pentagramUpsertSlice"

export function useSetPentagramDescription(): [typeof description, typeof handleSetDescription] {    
    const dispatch = useDispatch()
    const description = useSelector((state: AppRootState) => state.pentagramUpsert.description)
    const handleSetDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setDescription(e.target.value))
    }

    return [description, handleSetDescription]
}