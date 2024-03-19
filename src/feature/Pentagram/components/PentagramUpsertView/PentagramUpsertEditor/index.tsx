import type { MouseEvent, TouchEvent, MutableRefObject, ForwardedRef, ChangeEvent } from 'react';
import type { IMergedNode, IUnmergedChangeInfo } from '../../../store/pentagramUpsertSlice/interface';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import { forwardRef } from 'react';

import UpdateMainPentagon from './UpdateMainPentagon';
import PentagramDescription from './PentagramDescription';
import PendingChangeList from './PendingChangeList';

import './style/pentagramUpsertEditor.scss'

export type PentagramUpsertEditorProps = {
    mergedNodes: IMergedNode[],
    unmergedNodeInfos: IUnmergedChangeInfo[],

    parentRef: MutableRefObject<HTMLDivElement | null>

    angle: number | null,
    distance: number | null ,
    description: string | null,
    
    // COMMENT 이벤트 핸들러가 렌더링 중 바뀔 여지가 많고, object로 묶을 경우 전체 리렌더링 유발로 인해 나누어 전달
    handleClickNode?: (nodeId: string) => void,
    handleClickSelectedNode?: (nodeId: string) => void,
    handleClickSelectedPosition?: () => void,
    handleSetNewPosition?: (e: MouseEvent<HTMLDivElement>) => void,
    handleDragAndTouchMove?: (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => void
    
    handleClickRevert?: (id: string) => void;

    handleSetDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    eventHandler: OeuvreEventHandler
}

export default forwardRef(function PentagramUpsertEditor(props: PentagramUpsertEditorProps, ref: ForwardedRef<HTMLDivElement>) {
    const { 
        mergedNodes,
        unmergedNodeInfos,

        angle,
        distance,
        description,

        handleClickNode,
        handleClickSelectedNode,
        handleClickSelectedPosition,
        handleSetNewPosition,
        handleDragAndTouchMove,

        handleClickRevert,

        handleSetDescription,
        eventHandler
    } = props

    
    return (
        <div className="pentagram-upsert-editor-component"> 
            <div className="pentagram-upsert-editor-component__main-editor">
                <UpdateMainPentagon
                    ref={ref}
                    mergedNodes={mergedNodes}

                    angle={angle}
                    distance={distance}

                    handleClickNode={handleClickNode}
                    handleClickSelectedNode={handleClickSelectedNode}
                    handleClickSelectedPosition={handleClickSelectedPosition}
                    handleSetNewPosition={handleSetNewPosition}
                    handleDragAndTouchMove={handleDragAndTouchMove}

                    eventHandler={eventHandler}
                />
                <PentagramDescription
                    description={description}
                    handleSetDescription={handleSetDescription}
                />
            </div>
            <PendingChangeList 
                unmergedNodeInfos={unmergedNodeInfos}
                handleClickRevert={handleClickRevert}
            />
        </div>
    )
})