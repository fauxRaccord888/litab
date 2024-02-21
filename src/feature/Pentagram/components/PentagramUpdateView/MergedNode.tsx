import type { MouseEventHandler, DragEventHandler, TouchEventHandler } from 'react';
import { useMergedNode, useSelected } from '../../hooks';
import PositionAdjuster from '../common/PositionAdjuster';
import OeuvreNode from '$feature/Oeuvre/components/OeuvreNode';

import "./style/pentagramNode.scss"

type HandleDrag = (e: { clientX: number, clientY: number }) => void

type NodeWithPositionParentProps = {
    id: string,
    handleDrag?: HandleDrag
    handleClickNode?: (id: string) => void
}

export default function MergedNode(props: NodeWithPositionParentProps) {
    const { id, handleClickNode, handleDrag } = props
    const mergedNode = useMergedNode(id)
    const selected = useSelected(id)
    const { angle, distance, oeuvres } = mergedNode

    const handleClick:MouseEventHandler = (e) => {
        e.stopPropagation()
        if(handleClickNode && id) handleClickNode(id)
    }

    const onDragStart: DragEventHandler<HTMLDivElement> = (e) => {
        const img = new Image()
        e.dataTransfer.setDragImage(img, 0, 0)
    }

    const onDrag: DragEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if (handleDrag) handleDrag(e)
    }

    const onTouch: TouchEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if (handleDrag) handleDrag(e.touches[0])
    }

    return (
        <>
            {mergedNode &&
                <PositionAdjuster angle={angle} distance={distance}>
                    <div
                        className={`pentagram-node ${selected ? "selected" : ""}`}
                        draggable={true}
                        onClick={handleClick}
                        onDrag={onDrag}
                        onTouchMove={onTouch}
                        onDragOver={(e) => e.preventDefault()}
                        onDragStart={onDragStart}
                    >
                        <OeuvreNode 
                            item={oeuvres}
                            disableHover={selected}
                        />
                    </div>
                </PositionAdjuster>
            }
        </>
    )
}
