import type { MouseEventHandler } from 'react';
import type { DBPentagramNodes } from '../../../types';
import { FormatProps } from '$lib/types/components';
import { getSnapshot, getUnionedChanges } from '../../../utils';
import PositionAdjuster from '../../common/PositionAdjuster';
import OeuvreNode from '$feature/Oeuvre/components/OeuvreNode';

import "./style/pentagramNode.scss"

type PentagramNodeProps = FormatProps<DBPentagramNodes> & {
    timestamp: Date
    handleClickNode?: (id: string) => void
}

export default function PentagramNode(props: PentagramNodeProps) {
    const { item, timestamp, handleClickNode } = props
    const unionedChanges = getUnionedChanges(item)
    const { id, oeuvres } = item
    const { angle, distance, deleted } = getSnapshot(unionedChanges, timestamp)

    const onClickNode: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if (handleClickNode) handleClickNode(id)
    }

    return (
        <>
            {item && 
            !deleted &&
            typeof angle === 'number' &&
            typeof distance === 'number' &&
                <PositionAdjuster angle={angle} distance={distance}>
                    <div
                        className="pentagram-node-component"
                        onClick={onClickNode}
                    >
                        <OeuvreNode item={oeuvres} enableHover={true} />
                    </div>
                </PositionAdjuster>
            }
        </>
    )
}
