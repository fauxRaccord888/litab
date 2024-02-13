import type { AppRootState } from '$lib/stores/store';
import { useSelector } from 'react-redux';
import { mainNodeSelector, pendingNodeSelector, subNodeSelector } from '$feature/Pentagram/store/updateNodeSlice';
import NodeWithIndex from './NodeWithIndex';
import NodeWithPosition from './NodeWithPosition';
import './style/pentagramNodes.scss'

type HandleDrag = (e: { clientX: number, clientY: number }) => void

type NodeWithIndexParentProps = {
    id: string
    handleClickNode?: (id: string, index: number) => void
}

type NodeWithPositionParentProps = {
    id: string
    handleDrag?: HandleDrag
    handleClickNode?: (id: string) => void
}

export function MainNode(props: NodeWithIndexParentProps) {
    const { id, handleClickNode, ...restProps } = props
    const item = useSelector((state: AppRootState) => mainNodeSelector.selectById(state, id))

    return (
        <NodeWithIndex
            {...restProps}
            item={item}
            handleClickNode={handleClickNode}
        />
    )
}

export function SubNode(props: NodeWithPositionParentProps) {
    const { id, ...restProps } = props
    const item = useSelector((state: AppRootState) => subNodeSelector.selectById(state, id))

    return (
        <NodeWithPosition
            {...restProps}
            item={item}
        />
    )
}

export function PendingNode(props: NodeWithPositionParentProps) {
    const { id, ...restProps } = props
    const item = useSelector((state: AppRootState) => pendingNodeSelector.selectById(state, id))

    return (
        <NodeWithPosition
            {...restProps}
            item={item}
        />
    )
}

export function SelectedPosition(props: { handleDrag?: HandleDrag }) {
    const { handleDrag } = props
    const { selectedPosition } = useSelector((state: AppRootState) => state.updateNode)
    const { angle, distance } = selectedPosition
    return (
        <>
            {typeof angle === 'number' && 
            typeof distance === 'number' &&
                <NodeWithPosition
                    handleDrag={handleDrag}
                    item={{
                        ...selectedPosition,
                        selected: true
                    }}
                />
            }
        </>
    )
}