import type { DragEventHandler, MouseEvent, MouseEventHandler, TouchEvent } from 'react';
import type { IMergedNode } from '../../../store/pentagramUpsertSlice/interface';
import { FormatProps } from '$lib/types/components';
import PositionAdjuster from '../../common/PositionAdjuster';
import OeuvreNode from '$feature/Oeuvre/components/OeuvreNode';

import "./style/pentagramNode.scss"

type MergedNodeProps = FormatProps<IMergedNode> & {
    handleClickNode: (e: MouseEvent, id: string) => void
    handleClickSelectedNode: (e: MouseEvent<HTMLDivElement>, id: string) => void
    handleDragAndTouchMove:(e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => void
}

export default function MergedNode(props: MergedNodeProps) {
    const { item, handleClickNode, handleClickSelectedNode, handleDragAndTouchMove } = props
    const { id, angle, distance, oeuvres, selected, deleted } = item

    const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
        if (selected) handleClickSelectedNode(e, id)
        if (!selected) handleClickNode(e, id)
    }

    const onDragStart: DragEventHandler<HTMLDivElement> = (e) => {
        const img = new Image()
        e.dataTransfer.setDragImage(img, 0, 0)
    }

    const className = [
        "pentagram-node",
        selected ? "selected": "",
        deleted ? "deleted ": ""
    ].join(' ')

    return (
        <>
            {item &&
                <PositionAdjuster behind={deleted} angle={angle} distance={distance}>
                    <div
                        className={className}
                        // selecte node event
                        onClick={onClick}
                        // drag node event
                        draggable={true}
                        onDrag={handleDragAndTouchMove}
                        onTouchMove={handleDragAndTouchMove}
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
