import type { IMergedNode } from "../../../store/pentagramUpsertSlice/interface";
import type { MouseEvent, MutableRefObject } from 'react';
import type { QuadtreeNode } from "../../../utils";

import { useRef } from 'react';
import { useMainPentagonEventHandler, usePentagramNavigation, useSelectedPosition } from '../../../hooks';
import { formatProps } from "$lib/utils";

import OeuvrePentagonWrapper from '../../common/OeuvrePentagonWrapper';
import ItemIterator from "$lib/components/common/ItemIterator";
import MergedNode from './MergedNode';
import SelectedPosition from './SelectedPosition';

import "./style/mainPentagon.scss"

interface MainPentagonProps {
    pentagramId: string,
    mergedNodes: IMergedNode[],
    quadtreeRef: MutableRefObject<QuadtreeNode | null>,
}

export default function MainPentagon(props: MainPentagonProps) {
    const { pentagramId, mergedNodes, quadtreeRef } = props
    const parentRef = useRef<HTMLDivElement | null>(null)

    const { angle, distance } = useSelectedPosition()
    const { handleSelectNode, handleSetNewPosition, handleDragAndTouchMove } = useMainPentagonEventHandler(parentRef, quadtreeRef)

    const navigate = usePentagramNavigation()

    const handleClickSelectedNode = (e: MouseEvent<HTMLDivElement>, nodeId: string) => {
        e.stopPropagation()
        navigate.nodeInteraction(pentagramId, nodeId)
    }

    const handleClickSelectedPosition = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        navigate.addNode(pentagramId)
    }

    return (
        <div className="main-pentagon-container">
            <OeuvrePentagonWrapper 
                ref={parentRef}
                handleClickParent={handleSetNewPosition}    
            >
                {Boolean(mergedNodes.length) &&
                    <ItemIterator
                        additionalProps={{
                            handleDragAndTouchMove,
                            handleClickSelectedNode,
                            handleClickNode: handleSelectNode,
                        }}
                        items={mergedNodes.map((mergedNode) => formatProps(mergedNode))}
                        componentFunction={MergedNode}
                    />
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
}