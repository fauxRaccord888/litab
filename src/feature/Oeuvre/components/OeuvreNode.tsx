import type { DBOeuvre } from "../types";
import { useHover } from '$lib/hooks/useHover';
import BucketImage from "$lib/components/common/BucketImage";
import FallbackIcon from "$lib/components/icons/FallbackIcon";
import OeuvreMainInfo from "./common/OeuvreMainInfo";

import "./style/oeuvreNode.scss"

type OeuvreNodeProps = {
    oeuvre: DBOeuvre | null | undefined;
}

export default function OeuvreNode(props: OeuvreNodeProps) {
    const { oeuvre } = props
    const { status, handleMouseLeave, handleMouseOver} = useHover()

    return (
        <div 
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="oeuvre-node-container"
        >
            {oeuvre && 
                <div
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave} 
                    className={[
                        'oeuvre-hover-card-container',
                        status ? 'show' : ''
                    ].join(' ')}
                >
                    <OeuvreMainInfo mini {...oeuvre}/>
                </div>
            }
            {oeuvre && 
                <div className="oeuvre-cover-container">
                    <BucketImage 
                        bucket="oeuvres"
                        id={oeuvre.id}
                        fallback={<FallbackIcon />}
                    />
                </div>
            }
        </div>
    )
}
