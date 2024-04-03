import type { CSSProperties, PropsWithChildren } from 'react';
import type { PentagramNodePosition } from '../../types';
import './style/positionAdjuster.scss'

interface NodeStyle extends CSSProperties {
    '--distance-multiplier': number,
    '--degrees': string
}

interface PositionAdjusterProps extends PropsWithChildren{
    position: PentagramNodePosition
    behind?: boolean | null | undefined
}

export default function PositionAdjuster(props: PositionAdjusterProps) {
    const { position, behind, ...restProps } = props

    const style: NodeStyle = {
        '--distance-multiplier': (position.distance || 0) / 100,
        '--degrees': `${position.angle || 0}deg`
    }

    return (
        <div 
            {...restProps}
            style={style}
            className={[
                "position-adjuster-component", 
                behind ? "position-adjuster-component--behind" : ""
            ].join(" ")}
        >
            {props.children}
        </div>
    )
}