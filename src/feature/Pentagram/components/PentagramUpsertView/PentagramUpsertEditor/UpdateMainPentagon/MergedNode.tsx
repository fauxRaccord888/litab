import type { DragEvent, MouseEvent, TouchEvent } from 'react';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import type { IMergedNode } from '../../../../store/pentagramUpsertSlice/interface';
import { useHover } from '$lib/hooks';
import PositionAdjuster from '../../../common/PositionAdjuster';
import OeuvreNode from '$feature/Oeuvre/components/OeuvreNode';
import OeuvreNodeHoverCard from '$feature/Oeuvre/components/OeuvreNodeHoverCard';

import "./style/mergedNode.scss"

type MergedNodeProps = {
    item: IMergedNode,
    handleClickNode?: (id: string) => void
    handleClickSelectedNode?: (id: string) => void
    handleDragAndTouchMove?:(e: DragEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => void
    eventHandler: OeuvreEventHandler
}

export default function MergedNode(props: MergedNodeProps) {
    const { item, handleClickNode, handleClickSelectedNode, handleDragAndTouchMove, eventHandler } = props
    const { id, angle, distance, oeuvres, selected, deleted } = item
    const hoverHook = useHover()

    const onClickNode = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        if (selected && handleClickSelectedNode) handleClickSelectedNode(id)
        if (!selected && handleClickNode) handleClickNode(id)
    }

    const onDragStart = (e: DragEvent<HTMLDivElement>) => {
        const img = new Image()
        e.dataTransfer.setDragImage(img, 0, 0)
    }

    const onDragOrTouch = (e: DragEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
        e.stopPropagation()
        if (handleDragAndTouchMove) handleDragAndTouchMove(e)
    }

    const className = [
        "merged-node-component",
        selected ? "merged-node-component--selected": "",
        deleted ? "merged-node-component--deleted ": ""
    ].join(' ')

    return (
        <>
            {item &&
                <PositionAdjuster shadowDeleted={deleted} position={{ angle, distance, deleted }}>
                    <div
                        className={className}
                        // selecte node event
                        onClick={onClickNode}
                        // drag node event
                        draggable={true}
                        onDrag={onDragOrTouch}
                        onTouchMove={onDragOrTouch}
                        onDragStart={onDragStart}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <OeuvreNode item={oeuvres} hoverHook={hoverHook} />
                        {!selected && <OeuvreNodeHoverCard item={oeuvres} hoverHook={hoverHook} eventHandler={eventHandler} />}
                    </div>
                </PositionAdjuster>
            }
        </>
    )
}
