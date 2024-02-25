import type { FormatProps } from '$lib/types/components';
import type { DBPentagram } from "../../types";
import { useInitialize, useMerge, useMergedNode, useQuadtreeRef, useUnmergedChangeInfo } from '../../hooks';

import MainPentagon from './MainPentagon';
import PendingChangeList from './PendingChangeList';

import './style/pentagramUpdateView.scss'


export default function PentagramUpdateView(props: FormatProps<DBPentagram>) {
    const { item } = props
    const { pentagrams_nodesCollection } = item
    const quadtreeRef = useQuadtreeRef()
    
    useInitialize(pentagrams_nodesCollection)
    useMerge()
    
    const mergedNodes = useMergedNode()
    const unmergedNodeInfos = useUnmergedChangeInfo()

    return (
        <div className="pentagram-update-view-container">
            <div className="update-action-container">
                <MainPentagon
                    pentagramId={item.id}
                    mergedNodes={mergedNodes}
                    quadtreeRef={quadtreeRef}
               />
                <PendingChangeList 
                    unmergedNodeInfos={unmergedNodeInfos}
                    quadtreeRef={quadtreeRef}
                />
            </div>
        </div>
    )
}