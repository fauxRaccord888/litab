import type { DBPentagram_UPDATE } from "../../types"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { initialize, setDescription } from "../../store/pentagramUpsertSlice"

export function useInitialize(pentagram: DBPentagram_UPDATE | null) {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(
            initialize( { nodes: pentagram?.pentagram_nodesCollection } )
        )
        if (pentagram?.description) {
            dispatch(
                setDescription(pentagram?.description)
            )
        }
    }, [pentagram, dispatch])
}