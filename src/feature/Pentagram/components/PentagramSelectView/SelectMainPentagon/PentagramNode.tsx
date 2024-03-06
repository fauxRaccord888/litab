import type { MouseEventHandler } from 'react';
import type { DBPentagramNodes } from '../../../types';
import { FormatProps } from '$lib/types/components';
import PositionAdjuster from '../../common/PositionAdjuster';
import OeuvreNode from '$feature/Oeuvre/components/OeuvreNode';

import "./style/pentagramNode.scss"

type PentagramNodeProps = FormatProps<DBPentagramNodes> & {
    handleClickNode?: (id: string) => void
}

export default function PentagramNode(props: PentagramNodeProps) {
    const { item, handleClickNode } = props
    const { id, deleted, angle, distance, oeuvres } = item

    const onClickNode: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if (handleClickNode) handleClickNode(id)
    }

    return (
        <>
            {item && !deleted &&
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
