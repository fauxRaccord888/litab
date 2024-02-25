import type { CSSProperties, PropsWithChildren } from 'react';
import './style/positionAdjuster.scss'

interface NodeStyle extends CSSProperties {
    '--distance-multiplier': number,
    '--degrees': string
}

interface PositionAdjusterProps extends PropsWithChildren{
    angle: number,
    distance: number, 
}

export default function PositionAdjuster(props: PositionAdjusterProps) {
    const { angle, distance, ...restProps } = props

    const style: NodeStyle = {
        '--distance-multiplier': (distance || 0) / 100,
        '--degrees': `${angle || 0}deg`
    }

    return (
        <div 
            {...restProps}
            style={style}
            className="position-adjuster-container" 
        >
            {props.children}
        </div>
    )
}