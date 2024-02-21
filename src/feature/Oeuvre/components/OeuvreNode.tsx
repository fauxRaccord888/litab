import type { DBOeuvre } from "../types";
import { useRef } from "react";
import { useHover } from '$lib/hooks/useHover';
import BucketImage from "$lib/components/common/BucketImage";
import FallbackIcon from "$lib/components/icons/FallbackIcon";
import OeuvreMainInfo from "./common/OeuvreMainInfo";
import HoverCard from "$feature/portal/components/HoverCard";

import "./style/oeuvreNode.scss"

interface OeuvreNodeProps {
    item: DBOeuvre
    disableHover?: boolean | undefined
}

export default function OeuvreNode(props: OeuvreNodeProps) {
    const { item, disableHover } = props
    const { status, handleMouseLeave, handleMouseOver } = useHover()
    const ref = useRef<HTMLDivElement | null>(null)
    const position = ref.current?.getBoundingClientRect()
    
    return (
        <div
            ref={ref}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="oeuvre-node-container"
        >
            {!disableHover &&
                <HoverCard
                    position={position}
                    status={status}
                    handleMouseOver={handleMouseOver}
                    handleMouseLeave={handleMouseLeave} 
                >
                    <div className="oeuvre-hover-card-container">
                        <OeuvreMainInfo mini item={item}/>
                    </div>
                </HoverCard>
            }

            <div className="oeuvre-cover-container">
                <BucketImage 
                    bucket="oeuvres"
                    id={item.id}
                    fallback={<FallbackIcon className="fallback-icon"/>}
                />
            </div>
        </div>
    )
}
