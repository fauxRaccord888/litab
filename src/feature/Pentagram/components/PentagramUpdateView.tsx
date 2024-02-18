import type { FormatProps } from '$lib/types/components';
import type { DBPentagram } from "../types";
import { useRef } from 'react';
import { useHandleClickNodes, useHandleDrag, usePentagramNodes, useQuadtree } from "../hooks";
import { Node, PendingNode, SelectedPosition } from './Node_REDUX';

import OeuvrePentagonWrapper from "./common/OeuvrePentagonWrapper";
import ItemIterator from "$lib/components/common/ItemIterator";

import './style/pentagramUpdateView.scss'


export default function PentagramUpdateView(props: FormatProps<DBPentagram>) {
    const { item } = props
    const { pentagrams_nodesCollection: nodes } = item

    useQuadtree()
    const parentRef = useRef<HTMLDivElement | null>(null)
    const { handleDrag } = useHandleDrag(parentRef.current)
    const { handleClickNode, handleClickPendingNode, handleClickParent } = useHandleClickNodes()
    const { nodeIds, pendingNodeIds } = usePentagramNodes(nodes)

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
                            handleClickNode
                        }}
                        items={nodeIds}
                        componentFunction={Node}
                    />
                }
                {pendingNodeIds &&
                    <ItemIterator
                        additionalProps={{
                            handleDrag,
                            handleClickNode: handleClickPendingNode
                        }}
                        items={pendingNodeIds}
                        componentFunction={PendingNode}
                    />
                }
                <SelectedPosition handleDrag={handleDrag} />
            </OeuvrePentagonWrapper>
            {/* TODO UPDATE FORM */}
            {/* TODO WORKING TREE */}
        </div>
    )
}