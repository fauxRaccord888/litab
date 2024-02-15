import type { AppRootState } from '$lib/stores/store';
import { useSelector } from 'react-redux';
import { pendingNodeSelector, nodeSelector } from '$feature/Pentagram/store/pentagramUpsertSlice';

import PentagramNode from '../common/PentagramNode';

type HandleDrag = (e: { clientX: number, clientY: number }) => void

type NodeWithPositionParentProps = {
    id: string
    handleDrag?: HandleDrag
    handleClickNode?: (id: string) => void
}

export function Node(props: NodeWithPositionParentProps) {
    const { id, ...restProps } = props
    const item = useSelector((state: AppRootState) => nodeSelector.selectById(state, id))

    return (
        <PentagramNode
            {...restProps}
            item={item}
        />
    )
}

export function PendingNode(props: NodeWithPositionParentProps) {
    const { id, ...restProps } = props
    const item = useSelector((state: AppRootState) => pendingNodeSelector.selectById(state, id))

    return (
        <PentagramNode
            {...restProps}
            item={item}
        />
    )
}

export function SelectedPosition(props: { handleDrag?: HandleDrag }) {
    const { handleDrag } = props
    const { selectedPosition } = useSelector((state: AppRootState) => state.pentagramUpsert)
    const { angle, distance } = selectedPosition
    return (
        <>
            {typeof angle === 'number' && 
            typeof distance === 'number' &&
                <PentagramNode
                    handleDrag={handleDrag}
                    item={{
                        angle,
                        distance,
                        selected: true
                    }}
                />
            }
        </>
    )
}