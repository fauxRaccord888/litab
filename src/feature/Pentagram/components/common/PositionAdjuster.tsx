import type { PropsWithChildren } from 'react';
import type { PentagramNodePosition } from '../../types';
import { useSpring } from '@react-spring/web';
import { useCSSVariables } from '$lib/hooks/useCSSVariables';
import { animated } from '@react-spring/web';
import { calcPositionAdjusterAnimation } from './animation';
import './style/positionAdjuster.scss'

interface PositionAdjusterProps extends PropsWithChildren{
    position: PentagramNodePosition
    prevPosition?: PentagramNodePosition
    behind?: boolean | null | undefined
    enableAnimation?: boolean
}

export default function PositionAdjuster(props: PositionAdjusterProps) {
    const { position, prevPosition, behind, enableAnimation, ...restProps } = props
    const STYLE = useCSSVariables()

    const positionAdjusterAnimation = calcPositionAdjusterAnimation({
        position, prevPosition, enableAnimation, STYLE
    })
    
    const springProps = useSpring(positionAdjusterAnimation)
    
    return (
        <animated.div
            {...restProps}
            style={springProps}
            className={[
                "position-adjuster-component", 
                behind ? "position-adjuster-component--behind" : ""
            ].join(" ")}
        >
            {props.children}
        </animated.div>
    )
}