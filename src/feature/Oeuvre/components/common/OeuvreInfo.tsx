import type { MouseEventHandler } from "react";
import type { DBOeuvre } from "../../types";
import type { FormatProps } from "$lib/types/components";
import OeuvreMainInfo from "./OeuvreMainInfo";
import BucketImage from "$lib/components/common/BucketImage";
import FallbackIcon from "$lib/components/icons/FallbackIcon";

import './style/oeuvreInfo.scss'

type OeuvreInfoProps = FormatProps<DBOeuvre> & {
    handleClickItem?: (item: DBOeuvre) => void
    enableDescription?: boolean
}

export default function OeuvreInfo(props: OeuvreInfoProps) {
    const { item, handleClickItem, enableDescription } = props
    const { id, description } = item

    const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if (handleClickItem) handleClickItem(item)
    }

    return (
        <div 
            className="oeuvre-info-container"
            onClickCapture={onClick}
        >
            <div className="oeuvre-main-container">
                <div className="cover-container">
                    <BucketImage bucket="oeuvres" id={id} fallback={<FallbackIcon />} />
                </div>
                <OeuvreMainInfo item={item}/>
            </div>
            {enableDescription && description &&
                <div className="description">{description}</div>            
            }
        </div>
    )
}