import type { FormatProps } from '$lib/types/components';
import type { DBPentagram } from "../../types";
import { useRef } from 'react';
import { useInitialize, useQuadtreeRef, useHandleClickNodes, useHandleDrag } from '../../hooks';

import OeuvrePentagonWrapper from "../common/OeuvrePentagonWrapper";
import ItemIterator from "$lib/components/common/ItemIterator";
import MergedNode from './MergedNode';
import SelectedPosition from './SelectedPosition';

import './style/pentagramUpdateView.scss'


export default function PentagramUpdateView(props: FormatProps<DBPentagram>) {
    const { item } = props
    const { pentagrams_nodesCollection: nodes } = item
    const parentRef = useRef<HTMLDivElement | null>(null)
    const quadtreeRef = useQuadtreeRef()

    const nodeIds = useInitialize(nodes)

    const { handleDrag } = useHandleDrag(parentRef.current, quadtreeRef.current)
    const { handleClickNode, handleClickParent } = useHandleClickNodes(quadtreeRef.current)
    
    return (
        <div className="pentagram-update-view-container">
            <OeuvrePentagonWrapper 
                ref={parentRef}
                handleClickParent={handleClickParent}    
            >
                {nodeIds &&
                    <ItemIterator
                        additionalProps={{
                            handleDrag,
                            handleClickNode,
                        }}
                        items={nodeIds.map((id) => ({ id }))}
                        componentFunction={MergedNode}
                    />
                }
                <SelectedPosition handleDrag={handleDrag} />
            </OeuvrePentagonWrapper>
            {/* TODO UPDATE FORM */}
        </div>
    )
}