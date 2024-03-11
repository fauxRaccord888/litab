import type { DBPentagram_SELECT } from "../../../types";
import { formatProps } from '$lib/utils/formatProps';
import OeuvrePentagonWrapper from "../../common/OeuvrePentagonWrapper";
import ItemIterator from '$lib/components/common/ItemIterator';
import PentagramNode from "./PentagramNode";

import './style/selectMainPentagon.scss'

type SelectMainPentagonProps = {
    timestamp: Date,
    pentagram_nodesCollection: DBPentagram_SELECT["pentagram_nodesCollection"],
    handleClickNode?: (id: string) => void
}

export default function SelectMainPentagon(props: SelectMainPentagonProps) {
    const { timestamp, pentagram_nodesCollection, handleClickNode } = props

    return pentagram_nodesCollection && (
        <div className="select-main-pentagon-component">
            <OeuvrePentagonWrapper>
                <ItemIterator 
                    additionalProps={{
                        handleClickNode,
                        timestamp
                    }}
                    items={pentagram_nodesCollection?.edges.map((edge) => formatProps(edge.node))}
                    componentFunction={PentagramNode}
                />
            </OeuvrePentagonWrapper>
        </div>
    )
}
