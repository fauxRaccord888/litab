import type { DragEventHandler, MouseEvent, TouchEvent } from 'react';
import PlusIcon from '$lib/components/icons/PlusIcon';
import PositionAdjuster from '../../common/PositionAdjuster';

import "./style/pentagramNode.scss"
import "./style/selectedPosition.scss"

type SelectedPositionProps = {
    angle: number | null,
    distance: number | null,
    handleDragAndTouchMove:(e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => void
    handleClickSelectedPosition: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function SelectedPosition(props: SelectedPositionProps) {
    const { angle, distance, handleDragAndTouchMove, handleClickSelectedPosition } = props
    
    const onDragStart: DragEventHandler<HTMLDivElement> = (e) => {
        const img = new Image()
        e.dataTransfer.setDragImage(img, 0, 0)
    }

    return (
        <>
            {
                typeof angle === 'number' && 
                typeof distance === 'number' &&
                <PositionAdjuster angle={angle} distance={distance}>
                    <div 
                        onClick={handleClickSelectedPosition}
                        draggable={true}
                        onDragStart={onDragStart}
                        onTouchMove={handleDragAndTouchMove}
                        onDrag={handleDragAndTouchMove} 
                        onDragOver={(e) => e.preventDefault()}
                        className="selected-position-container pentagram-node"
                    >
                        <PlusIcon />
                    </div>
                </PositionAdjuster>
            }
        </>
    )
}