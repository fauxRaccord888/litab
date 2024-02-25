import type { DBPentagram } from "../../types"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { initialize } from "../../store/pentagramUpsertSlice"

export function useInitialize(nodes: DBPentagram["pentagrams_nodesCollection"]) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initialize({nodes}))
    }, [nodes, dispatch])
}