import type { DBOeuvre } from "../../types";
import OeuvreMainInfo from "./OeuvreMainInfo";
import BucketImage from "$lib/components/common/BucketImage";

import './style/oeuvreInfo.scss'

export default function OeuvreInfo(props: DBOeuvre ) {
    const { id, description } = props

    return (
        <div className="oeuvre-info-container">
            <div className="cover-container">
                <BucketImage bucket="oeuvres" id={id} />
            </div>

            <div className="data-container">
                <OeuvreMainInfo {...props}/>
                <span className="description">{description}</span>
            </div>
            
        </div>
    )
}