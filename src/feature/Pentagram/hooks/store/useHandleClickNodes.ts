import type { MouseEventHandler } from "react"
import { useDispatch } from "react-redux"
import { setSelected, setSelectedPosition, unselect } from "../../store/pentagramUpsertSlice"
import { getAngleAndDisctance } from "../../utils"
import { PENTAGRAM } from "../../constants"

export function useHandleClickNodes() {
    const dispatch = useDispatch()

    const handleClickNode = (id: string) => {
        dispatch(setSelected({id, nodeType: 'node'}))
    }

    const handleClickPendingNode = (id: string) => {
        dispatch(setSelected({id, nodeType: 'pending-node'}))
    }

    const handleClickParent: MouseEventHandler<HTMLDivElement> = (e) => {
        const { angle, distance } = getAngleAndDisctance(e, e.currentTarget, PENTAGRAM.SIDES)
        if (typeof angle === 'number' && typeof distance === 'number') {
            dispatch(unselect())
            dispatch(setSelectedPosition({angle, distance}))
        }
    }

    return { handleClickNode, handleClickPendingNode, handleClickParent }
}    
