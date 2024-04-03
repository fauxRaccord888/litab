import type { DragEvent, MouseEvent, TouchEvent } from 'react';
import PositionAdjuster from '../../../common/PositionAdjuster';
import PlusIcon from '$lib/components/icons/PlusIcon';

import "./style/selectedPosition.scss"

type SelectedPositionProps = {
    angle: number | null,
    distance: number | null,
    handleDragAndTouchMove?:(e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => void
    handleClickSelectedPosition?: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function SelectedPosition(props: SelectedPositionProps) {
    const { angle, distance, handleDragAndTouchMove, handleClickSelectedPosition } = props
    
    const onDragStart = (e: DragEvent<HTMLDivElement>) => {
        const img = new Image()
        e.dataTransfer.setDragImage(img, 0, 0)
    }

    const onDragOrTouch = (e: DragEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
        e.stopPropagation()
        if (handleDragAndTouchMove) handleDragAndTouchMove(e)
    }

    const onClickSelectedPosition = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        if (handleClickSelectedPosition) handleClickSelectedPosition(e)
    }

    return (
        <>
            {
                typeof angle === 'number' && 
                typeof distance === 'number' &&
                <PositionAdjuster position={{ angle, distance, deleted: false }}>
                    <div 
                        onClick={onClickSelectedPosition}
                        draggable={true}
                        onDragStart={onDragStart}
                        onTouchMove={onDragOrTouch}
                        onDrag={onDragOrTouch} 
                        onDragOver={(e) => e.preventDefault()}
                        className="selected-position-component"
                    >
                        <PlusIcon className="selected-position-component__plus-icon-component"/>
                    </div>
                </PositionAdjuster>
            }
        </>
    )
}