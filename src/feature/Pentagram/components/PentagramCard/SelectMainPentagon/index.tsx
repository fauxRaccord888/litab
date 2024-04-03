import type { DBPentagram_SELECT, PentagramEventHandler, PentagramSelectOptions } from "../../../types";
import OeuvrePentagonWrapper from "../../common/OeuvrePentagonWrapper";
import PentagramNode from "./PentagramNode";

import './style/selectMainPentagon.scss'

type SelectMainPentagonProps = {
    timestamp: Date,
    pentagram_nodesCollection: DBPentagram_SELECT["pentagram_nodesCollection"],
    options: PentagramSelectOptions
    eventHandler: PentagramEventHandler
}

export default function SelectMainPentagon(props: SelectMainPentagonProps) {
    const { timestamp, pentagram_nodesCollection, options, eventHandler } = props
    const items = pentagram_nodesCollection?.edges.map((edge) => edge.node)

    return pentagram_nodesCollection && (
        <div className="select-main-pentagon-component">
            <OeuvrePentagonWrapper>
                {items?.map((item) => (
                    <PentagramNode 
                        key={item.id}
                        item={item}
                        options={options}
                        eventHandler={eventHandler}
                        timestamp={timestamp}
                    />
                ))}
            </OeuvrePentagonWrapper>
        </div>
    )
}
