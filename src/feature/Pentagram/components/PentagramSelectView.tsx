import type { FormatProps } from '$lib/types/components';
import type { DBPentagram } from "$feature/Pentagram/types";
import { formatProps } from '$lib/utils';

import PentagramMetaInfo from "./common/PentagramMetaInfo";
import OeuvrePentagonWrapper from "./common/OeuvrePentagonWrapper";
import ItemIterator from "$lib/components/common/ItemIterator";
import NodeWithPosition from './common/PentagramNode';
import PentagramDetailedInfo from "./common/PentagramDetailedInfo";

import './style/pentagramSelectView.scss'

interface PentagramSelectViewProps extends FormatProps<DBPentagram> {
    feed?: boolean
}

export default function PentagramSelectView(props: PentagramSelectViewProps) {
    const { item, feed } = props
    const { pentagrams_nodesCollection: nodes } = item
    const items = nodes?.edges.map((item) => formatProps(item.node))

    return (
        <div className="pentagram-select-view-container">
            <PentagramMetaInfo item={item} feed={feed}/>
            <OeuvrePentagonWrapper>
                {items &&
                    <ItemIterator
                        items={items}
                        componentFunction={NodeWithPosition}
                    />
                }
            </OeuvrePentagonWrapper>
            <PentagramDetailedInfo item={item} feed={feed} />
        </div>
    )
}
