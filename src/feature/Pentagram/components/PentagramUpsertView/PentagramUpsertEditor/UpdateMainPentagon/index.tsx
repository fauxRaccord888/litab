import type { IMergedNode } from "../../../../store/pentagramUpsertSlice/interface";
import type { ForwardedRef, MouseEvent, TouchEvent } from 'react';

import { forwardRef } from 'react';

import OeuvrePentagonWrapper from '../../../common/OeuvrePentagonWrapper';
import MergedNode from './MergedNode';
import SelectedPosition from './SelectedPosition';

import "./style/updateMainPentagon.scss"

interface UpdateMainPentagonProps {
    mergedNodes: IMergedNode[],

    angle: number | null,
    distance: number | null ,

    handleClickNode?: (nodeId: string) => void,
    handleClickSelectedNode?: (nodeId: string) => void,
    handleClickSelectedPosition?: () => void,
    handleSetNewPosition?: (e: MouseEvent<HTMLDivElement>) => void,
    handleDragAndTouchMove?: (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => void
}

export default forwardRef(function UpdateMainPentagon(props: UpdateMainPentagonProps, ref: ForwardedRef<HTMLDivElement>) {
    const { 
        mergedNodes,
        angle,
        distance,
        handleClickNode,
        handleClickSelectedNode,
        handleClickSelectedPosition,
        handleSetNewPosition,
        handleDragAndTouchMove
    } = props

    return (
        <div className="update-main-pentagon-component">
            <OeuvrePentagonWrapper 
                ref={ref}
                handleClickParent={handleSetNewPosition}    
            >
                {Boolean(mergedNodes.length) &&
                    mergedNodes.map((item) => (
                        <MergedNode 
                            key={item.id}
                            item={item}
                            handleDragAndTouchMove={handleDragAndTouchMove}
                            handleClickSelectedNode={handleClickSelectedNode}
                            handleClickNode={handleClickNode}
                        />
                    ))
                }
                <SelectedPosition 
                    angle={angle}
                    distance={distance}
                    handleDragAndTouchMove={handleDragAndTouchMove} 
                    handleClickSelectedPosition={handleClickSelectedPosition} 
                />
            </OeuvrePentagonWrapper>
        </div>
    )
})