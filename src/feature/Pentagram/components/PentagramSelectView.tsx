import type { FormatProps } from '$lib/types/components';
import type { DBPentagram } from "$feature/Pentagram/types";
import { usePentagramNodes } from "../hooks";

import PentagramMetaInfo from "./common/PentagramMetaInfo";
import OeuvrePentagonWrapper from "./common/OeuvrePentagonWrapper";
import { MainNode, SubNode } from './Node_REDUX';
import ItemIterator from "$lib/components/common/ItemIterator";
import PentagramDetailedInfo from "./common/PentagramDetailedInfo";

import './style/pentagramSelectView.scss'

interface PentagramSelectViewProps extends FormatProps<DBPentagram> {
    feed?: boolean
}

export default function PentagramSelectView(props: PentagramSelectViewProps) {
    const { item, feed } = props

    const { pentagrams_oeuvresCollection: mainNodes, pentagrams_nodesCollection: subNodes } = item
    const { mainNodeIds, subNodeIds } = usePentagramNodes(mainNodes, subNodes)

    return (
        <div className="pentagram-select-view-container">
            <PentagramMetaInfo item={item} feed={feed}/>
            <OeuvrePentagonWrapper>
                <ItemIterator
                    items={mainNodeIds}
                    componentFunction={MainNode}
                />
                {subNodeIds &&
                    <ItemIterator
                        items={subNodeIds}
                        componentFunction={SubNode}
                    />
                }
            </OeuvrePentagonWrapper>
            <PentagramDetailedInfo item={item} feed={feed} />
        </div>
    )
}
