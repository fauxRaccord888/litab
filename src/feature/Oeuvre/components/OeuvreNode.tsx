import type { DBOeuvre, OeuvreEventHandler } from "../types";
import { useRef } from "react";
import { useHover } from '$lib/hooks';
import BucketImage from "$lib/components/common/BucketImage";
import FallbackIcon from "$lib/components/icons/FallbackIcon";
import OeuvreInfoCard from "./common/OeuvreInfoCard";
import HoverCard from "$feature/portal/components/HoverCard";

import "./style/oeuvreNode.scss"

type OeuvreNodeProps = {
    item: DBOeuvre
    enableHover?: boolean | undefined
    eventHandler: OeuvreEventHandler
}

export default function OeuvreNode(props: OeuvreNodeProps) {
    const { item, enableHover, eventHandler } = props
    const { status, handleMouseLeave, handleMouseOver } = useHover()
    const ref = useRef<HTMLDivElement | null>(null)
    const position = ref.current?.getBoundingClientRect()
    
    return (
        <div
            ref={ref}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="oeuvre-node-component"
        >
            {enableHover &&
                <HoverCard
                    position={position}
                    status={status}
                    handleMouseOver={handleMouseOver}
                    handleMouseLeave={handleMouseLeave} 
                >
                    <div className="oeuvre-node-component__hover-card-inner-container">
                        <OeuvreInfoCard
                            item={item}
                            renderConfig={{
                                coverImage: false,
                                title: true,
                                mainInfo: true,
                                subInfo: false
                            }}
                            eventHandler={eventHandler}
                            options={{
                                enableSelect: true
                            }}
                        />
                    </div>
                </HoverCard>
            }

            <div className="oeuvre-node-component__cover-container">
                <BucketImage 
                    bucket="oeuvres"
                    id={item.id}
                    fallback={<FallbackIcon />}
                />
            </div>
        </div>
    )
}
