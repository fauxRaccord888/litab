import type { SelectableDBOeuvre } from "../types";
import { useRef } from "react";
import { useHover } from '$lib/hooks/useHover';
import BucketImage from "$lib/components/common/BucketImage";
import FallbackIcon from "$lib/components/icons/FallbackIcon";
import OeuvreMainInfo from "./common/OeuvreMainInfo";
import HoverCard from "$feature/portal/components/HoverCard";

import "./style/oeuvreNode.scss"

export default function OeuvreNode(props: SelectableDBOeuvre) {
    const { item, selected } = props
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
            {item && !selected &&
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

            <div className={`oeuvre-cover-container ${selected ? "selected" : ""}`}>
                {item &&
                    <BucketImage 
                        bucket="oeuvres"
                        id={item.id}
                        fallback={<FallbackIcon className="fallback-icon"/>}
                    />
                }
            </div>
        </div>
    )
}
