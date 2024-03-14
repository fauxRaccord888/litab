import type { DBPentagram_SELECT } from "../../../types";
import OeuvrePentagonWrapper from "../../common/OeuvrePentagonWrapper";
import PentagramNode from "./PentagramNode";

import './style/selectMainPentagon.scss'

type SelectMainPentagonProps = {
    timestamp: Date,
    pentagram_nodesCollection: DBPentagram_SELECT["pentagram_nodesCollection"],
    handleClickNode?: (id: string) => void
}

export default function SelectMainPentagon(props: SelectMainPentagonProps) {
    const { timestamp, pentagram_nodesCollection, handleClickNode } = props
    const items = pentagram_nodesCollection?.edges.map((edge) => edge.node)

    return pentagram_nodesCollection && (
        <div className="select-main-pentagon-component">
            <OeuvrePentagonWrapper>
                {items?.map((item) => (
                    <PentagramNode 
                        key={item.id}
                        item={item}
                        handleClickNode={handleClickNode}
                        timestamp={timestamp}

                    />
                ))}
            </OeuvrePentagonWrapper>
        </div>
    )
}
