import type { DBPentagram_SELECT, PentagramEventHandler } from "../../../types";
import OeuvrePentagonWrapper from "../../common/OeuvrePentagonWrapper";
import PentagramNode from "./PentagramNode";

import './style/selectMainPentagon.scss'

type SelectMainPentagonProps = {
    timestamp: Date,
    pentagram_nodesCollection: DBPentagram_SELECT["pentagram_nodesCollection"],
    eventHandler: PentagramEventHandler
}

export default function SelectMainPentagon(props: SelectMainPentagonProps) {
    const { timestamp, pentagram_nodesCollection, eventHandler } = props
    const items = pentagram_nodesCollection?.edges.map((edge) => edge.node)

    return pentagram_nodesCollection && (
        <div className="select-main-pentagon-component">
            <OeuvrePentagonWrapper>
                {items?.map((item) => (
                    <PentagramNode 
                        key={item.id}
                        item={item}
                        eventHandler={eventHandler}
                        timestamp={timestamp}
                    />
                ))}
            </OeuvrePentagonWrapper>
        </div>
    )
}
