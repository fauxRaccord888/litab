import type { DBOeuvre } from "../../types";
import type { FormatProps } from "$lib/types/components";
import OeuvreMainInfo from "./OeuvreMainInfo";
import BucketImage from "$lib/components/common/BucketImage";

import './style/oeuvreInfo.scss'

export default function OeuvreInfo(props: FormatProps<DBOeuvre> ) {
    const { item } = props
    const { id, description } = item

    return (
        <div className="oeuvre-info-container">
            <div className="cover-container">
                <BucketImage bucket="oeuvres" id={id} />
            </div>

            <div className="data-container">
                <OeuvreMainInfo item={item}/>
                <span className="description">{description}</span>
            </div>
            
        </div>
    )
}