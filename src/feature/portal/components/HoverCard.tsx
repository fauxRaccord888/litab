import type { PropsWithChildren, CSSProperties  } from "react";
import { useMemo } from 'react';
import { createPortal } from "react-dom";
import "./style/hoverCard.scss"

interface HoverCardProps extends PropsWithChildren {
    status: boolean;
    position: { top: number, left: number } | undefined
    handleMouseOver: () => void;
    handleMouseLeave: () => void;
}

interface HoverCardStyle extends CSSProperties {
    '--top': string,
    '--left': string
}

export default function HoverCard(props: HoverCardProps) {
    const { status, position, handleMouseOver, handleMouseLeave, children } = props
    const style:HoverCardStyle = { 
        '--top': `${position?.top}px`,
        '--left': `${position?.left}px`
    }
    const rootElem = useMemo(() => document.getElementById('portal-root'), [])

    return (
        <>
            {rootElem && createPortal(
                <div
                    style={style}
                    onClick={(e) => e.stopPropagation()}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave} 
                    className={`hover-card-container ${status ? 'show' : ''}`}
                >
                    {children}
                </div>
            , rootElem)}
        </>
    )
}