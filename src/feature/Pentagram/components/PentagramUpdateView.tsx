import type { FormatProps } from '$lib/types/components';
import type { DBPentagram } from "../types";

import { useRef } from 'react';
import { useHandleClickNodes, useHandleDrag, usePentagramNodes } from "../hooks";
import OeuvrePentagonWrapper from "./common/OeuvrePentagonWrapper";
import ItemIterator from "$lib/components/common/ItemIterator";
import { MainNode, SubNode, SelectedPosition, PendingNode} from './Node_REDUX';

import './style/pentagramUpdateView.scss'


export default function PentagramUpdateView(props: FormatProps<DBPentagram>) {
    const { item } = props
    const { pentagrams_oeuvresCollection: mainNodes, pentagrams_nodesCollection: subNodes } = item

    const parentRef = useRef<HTMLDivElement | null>(null)
    const { handleClickMainNode, handleClickSubNode, handleClickPendingNode, handleClickParent } = useHandleClickNodes()
    const { handleDrag } = useHandleDrag(parentRef.current)
    const { mainNodeIds, subNodeIds, pendingNodeIds } = usePentagramNodes(mainNodes, subNodes)

    return (
        <div className="pentagram-update-view-container">
            <OeuvrePentagonWrapper 
                ref={parentRef}
                handleClickParent={handleClickParent}    
            >
                <ItemIterator
                    additionalProps={{handleClickNode: handleClickMainNode}}
                    items={mainNodeIds}
                    componentFunction={MainNode}
                />
                {subNodeIds &&
                    <ItemIterator
                        additionalProps={{
                            handleDrag,
                            handleClickNode: handleClickSubNode
                        }}
                        items={subNodeIds}
                        componentFunction={SubNode}
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