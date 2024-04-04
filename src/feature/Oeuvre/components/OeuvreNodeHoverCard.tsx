import type { DBOeuvre, OeuvreEventHandler } from "../types";
import type { useHover } from '$lib/hooks';
import { useRef } from "react";
import OeuvreInfoCard from "./common/OeuvreInfoCard";
import HoverCard from "$feature/portal/components/HoverCard";

import "./style/oeuvreNodeHoverCard.scss"

type OeuvreNodeHoverCardProps = {
    item: DBOeuvre
    hoverHook: ReturnType<typeof useHover>
    eventHandler: OeuvreEventHandler
}

export default function OeuvreNodeHoverCard(props: OeuvreNodeHoverCardProps) {
    const { item, hoverHook, eventHandler } = props
    const { status, handleMouseLeave, handleMouseOver } = hoverHook
    const ref = useRef<HTMLDivElement | null>(null)
    const position = ref.current?.getBoundingClientRect()
    
    return (
        <div
            ref={ref}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="oeuvre-node-hover-card-component"
        >
            <HoverCard
                position={position}
                status={status}
                handleMouseOver={handleMouseOver}
                handleMouseLeave={handleMouseLeave} 
            >
                <div className="oeuvre-node-hover-card-component__hover-card-inner-container">
                    <OeuvreInfoCard
                        item={item}
                        renderConfig={{
                            coverImage: false,
                            title: true,
                            mainInfo: false,
                            subInfo: false
                        }}
                        eventHandler={eventHandler}
                        options={{
                            enableSelect: true
                        }}
                    />
                </div>
            </HoverCard>
        </div>
    )
}
