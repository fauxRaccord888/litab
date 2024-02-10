import type { DBPentagram } from "$feature/Pentagram/types";
import { useMainNodeItems, useSubNodeItems } from "../hooks";

import PentagramMetaInfo from "./common/PentagramMetaInfo";
import OeuvrePentagonWrapper from "./common/OeuvrePentagonWrapper";
import ItemIterator from "$lib/components/common/ItemIterator";
import MainNode from "./common/MainNode";
import SubNode from "./common/SubNode";
import PentagramDetailedInfo from "./common/PentagramDetailedInfo";

import './style/pentagramSelectView.scss'

interface PentagramSelectViewProps extends DBPentagram {
    feed?: boolean
}

export default function PentagramSelectView(props: PentagramSelectViewProps) {
    const { item, feed } = props

    const { pentagrams_oeuvresCollection: mainNodes, pentagrams_nodesCollection: subNodes } = item
    const mainNodeItems = useMainNodeItems(mainNodes)
    const subNodeItems = useSubNodeItems(subNodes)


    return (
        <div className="pentagram-select-view-container">
            <PentagramMetaInfo item={item} feed={feed}/>
            <OeuvrePentagonWrapper>
                <ItemIterator
                    items={mainNodeItems}
                    componentFunction={MainNode}
                />
                {subNodeItems &&
                    <ItemIterator
                        items={subNodeItems}
                        componentFunction={SubNode}
                    />
                }
            </OeuvrePentagonWrapper>
            <PentagramDetailedInfo item={item} feed={feed} />
        </div>
    )
}
