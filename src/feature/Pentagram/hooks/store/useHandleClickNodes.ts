import type { MouseEventHandler } from "react"
import { useDispatch } from "react-redux"
import { setSelected, setPosition, unselect } from "../../store/pentagramUpsertSlice"
import { getAngleAndDisctance } from "../../utils"
import { PENTAGRAM } from "../../constants"

export function useHandleClickNodes() {
    const dispatch = useDispatch()

    const handleClickNode = (id: string) => {
        dispatch(setSelected({ id }))
    }

    const handleClickParent: MouseEventHandler<HTMLDivElement> = (e) => {
        const { angle, distance } = getAngleAndDisctance(e, e.currentTarget, PENTAGRAM.SIDES)
        if (typeof angle === 'number' && typeof distance === 'number') {
            dispatch(unselect())
            dispatch(setPosition({angle, distance}))
        }
    }

    return { handleClickNode, handleClickParent }
}    
