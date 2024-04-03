import type { MouseEventHandler } from 'react';
import type { DBPentagramNodes, PentagramEventHandler, PentagramSelectOptions } from '../../../types';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import { getSnapshot, getUnionedChanges } from '../../../utils';
import PositionAdjuster from '../../common/PositionAdjuster';
import OeuvreNode from '$feature/Oeuvre/components/OeuvreNode';

import "./style/pentagramNode.scss"

type PentagramNodeProps = {
    item: DBPentagramNodes,
    timestamp: Date
    options: PentagramSelectOptions
    eventHandler: PentagramEventHandler & OeuvreEventHandler
}

export default function PentagramNode(props: PentagramNodeProps) {
    const { item, timestamp, options, eventHandler } = props
    const unionedChanges = getUnionedChanges(item)
    const { id, oeuvres } = item
    const position= getSnapshot(unionedChanges, timestamp)
    const prevPosition = getSnapshot(unionedChanges, timestamp, true)

    const onClickNode: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if (eventHandler?.nodeSelectModal) eventHandler.nodeSelectModal(id)
    }

    return (
        <>
            {item && 
            typeof position.angle === 'number' &&
            typeof position.distance === 'number' &&
                <PositionAdjuster 
                    enableAnimation={options.enableAnimation}
                    position={position}
                    prevPosition={prevPosition}
                >
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
