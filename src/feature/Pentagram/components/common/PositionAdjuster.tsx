import type { PropsWithChildren } from 'react';
import type { PentagramNodePosition } from '../../types';
import { useSpring } from '@react-spring/web';
import { useCSSVariables } from '$lib/hooks';
import { animated } from '@react-spring/web';
import { calcPositionAdjusterAnimation } from './animation';
import './style/positionAdjuster.scss'

interface PositionAdjusterProps extends PropsWithChildren{
    position: PentagramNodePosition
    prevPosition?: PentagramNodePosition
    inView: boolean
    enableAnimation?: boolean
    shadowDeleted?: boolean | null | undefined
}

export default function PositionAdjuster(props: PositionAdjusterProps) {
    const { position, prevPosition, inView, enableAnimation, shadowDeleted, ...restProps } = props
    const STYLE = useCSSVariables()

    const positionAdjusterAnimation = calcPositionAdjusterAnimation({ 
        position, 
        prevPosition, 
        inView,
        enableAnimation, 
        shadowDeleted, 
        STYLE 
    })
    const springProps = useSpring(positionAdjusterAnimation)

    return (
        <animated.div
            {...restProps}
            style={springProps}
            className={[
                "position-adjuster-component", 
                shadowDeleted ? "position-adjuster-component--shadowDeleted" : ""
            ].join(" ")}
        >
            {props.children}
        </animated.div>
    )
}