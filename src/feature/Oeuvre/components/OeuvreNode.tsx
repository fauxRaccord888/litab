import type { DBOeuvre } from "../types";
import type { useHover } from '$lib/hooks';
import BucketImage from "$lib/components/common/BucketImage";
import FallbackIcon from "$lib/components/icons/FallbackIcon";

import "./style/oeuvreNode.scss"

type OeuvreNodeProps = {
    item: DBOeuvre
    hoverHook: ReturnType<typeof useHover>
}

export default function OeuvreNode(props: OeuvreNodeProps) {
    const { item, hoverHook } = props
    const { handleMouseOver, handleMouseLeave } = hoverHook
    
    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="oeuvre-node-component"
        >
            <div className="oeuvre-node-component__cover-container">
                <BucketImage 
                    bucket="oeuvres"
                    id={item?.id}
                    timeStamp={item?.updatedAt}
                    fallback={<FallbackIcon />}
                />
            </div>
        </div>
    )
}
