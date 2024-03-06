import type { DragEvent, MouseEvent, TouchEvent } from 'react';
import type { IMergedNode } from '../../../../store/pentagramUpsertSlice/interface';
import { FormatProps } from '$lib/types/components';
import PositionAdjuster from '../../../common/PositionAdjuster';
import OeuvreNode from '$feature/Oeuvre/components/OeuvreNode';

import "./style/mergedNode.scss"

type MergedNodeProps = FormatProps<IMergedNode> & {
    handleClickNode?: (id: string) => void
    handleClickSelectedNode?: (id: string) => void
    handleDragAndTouchMove?:(e: DragEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => void
}

export default function MergedNode(props: MergedNodeProps) {
    const { item, handleClickNode, handleClickSelectedNode, handleDragAndTouchMove } = props
    const { id, angle, distance, oeuvres, selected, deleted } = item

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
                <PositionAdjuster behind={deleted} angle={angle} distance={distance}>
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
                        <OeuvreNode item={oeuvres} enableHover={!selected} />
                    </div>
                </PositionAdjuster>
            }
        </>
    )
}
