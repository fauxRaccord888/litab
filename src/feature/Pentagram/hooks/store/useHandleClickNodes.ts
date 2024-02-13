import type { MouseEventHandler } from "react"
import { useDispatch } from "react-redux"
import { setSelected, setSelectedPosition, unselect } from "../../store/updateNodeSlice"
import { getAngleAndDisctance } from "../../utils"
import { PENTAGRAM } from "../../constants"

export function useHandleClickNodes() {
    const dispatch = useDispatch()

    const handleClickMainNode = (id: string, index: number) => {
        dispatch(setSelected({id, index, nodeType: 'main-node'}))
    }
    
    const handleClickSubNode = (id: string) => {
        dispatch(setSelected({id, nodeType: 'sub-node'}))
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

    return { handleClickMainNode, handleClickSubNode, handleClickPendingNode, handleClickParent }
}    
