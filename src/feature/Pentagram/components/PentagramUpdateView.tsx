import type { FormatProps } from '$lib/types/components';
import type { DBPentagram } from "../types";
import { useRef } from 'react';
import { useInitialize, useQuadtreeRef } from '../hooks';
import { useHandleClickNodes, useHandleDrag } from "../hooks";
import { Node, SelectedPosition } from './Node_REDUX';

import OeuvrePentagonWrapper from "./common/OeuvrePentagonWrapper";
import ItemIterator from "$lib/components/common/ItemIterator";

import './style/pentagramUpdateView.scss'


export default function PentagramUpdateView(props: FormatProps<DBPentagram>) {
    const { item } = props
    const { pentagrams_nodesCollection: nodes } = item
    const parentRef = useRef<HTMLDivElement | null>(null)
    const ids = useInitialize(nodes)
    const quadtreeRef = useQuadtreeRef()
    const { handleDrag } = useHandleDrag(parentRef.current, quadtreeRef.current)
    const { handleClickNode, handleClickParent } = useHandleClickNodes()
    
    return (
        <div className="pentagram-update-view-container">
            <OeuvrePentagonWrapper 
                ref={parentRef}
                handleClickParent={handleClickParent}    
            >
                {ids &&
                    <ItemIterator
                        additionalProps={{
                            handleDrag,
                            handleClickNode,
                        }}
                        items={ids.map((id) => ({ id }))}
                        componentFunction={Node}
                    />
                }
                <SelectedPosition handleDrag={handleDrag} />
            </OeuvrePentagonWrapper>
            {/* TODO UPDATE FORM */}
            {/* TODO WORKING TREE */}
        </div>
    )
}