import type { MouseEventHandler } from 'react';
import type { DBPentagramNodes, PentagramEventHandler } from '../../../types';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import { getSnapshot, getUnionedChanges } from '../../../utils';
import PositionAdjuster from '../../common/PositionAdjuster';
import OeuvreNode from '$feature/Oeuvre/components/OeuvreNode';

import "./style/pentagramNode.scss"

type PentagramNodeProps = {
    item: DBPentagramNodes,
    timestamp: Date
    eventHandler: PentagramEventHandler & OeuvreEventHandler
}

export default function PentagramNode(props: PentagramNodeProps) {
    const { item, timestamp, eventHandler } = props
    const unionedChanges = getUnionedChanges(item)
    const { id, oeuvres } = item
    const { angle, distance, deleted } = getSnapshot(unionedChanges, timestamp)

    const onClickNode: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if (eventHandler?.nodeSelectModal) eventHandler.nodeSelectModal(id)
    }

    return (
        <>
            {item && 
            !deleted &&
            typeof angle === 'number' &&
            typeof distance === 'number' &&
                <PositionAdjuster position={{angle, distance, deleted: false}}>
                    <div
                        className="pentagram-node-component"
                        onClick={onClickNode}
                    >
                        <OeuvreNode item={oeuvres} enableHover={true} eventHandler={eventHandler} />
                    </div>
                </PositionAdjuster>
            }
        </>
    )
}
