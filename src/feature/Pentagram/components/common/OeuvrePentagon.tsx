import type { DBOeuvresCollection, DBPentagramsNodesCollection, DBPentagramsNodes } from "../../types";
import type { DBOeuvre } from "$feature/Oeuvre/types";
import type { CSSProperties, MouseEventHandler } from "react";

import OeuvreNode from "$feature/Oeuvre/components/OeuvreNode";
import PentagonIcon from "$lib/components/icons/PentagonIcon";

type Node = FirstNodeOfCollection<DBOeuvresCollection>
export default function OeuvrePentagon(props: {collection: DBOeuvresCollection | undefined | null}) {
    const { collection } = props;

interface OeuvrePentagonProps {
    mainNodes: DBOeuvresCollection
    subNodes: DBPentagramsNodesCollection
}

export default function OeuvrePentagon(props: OeuvrePentagonProps) {
    const { mainNodes, subNodes } = props;

    const items = Array.from<DBOeuvre | undefined>({length:  5})
    mainNodes && mainNodes.edges.forEach((edge) => {
        items[edge.node.index] = edge.node.oeuvres
    })

    return (
        <div className="oeuvre-pentagon-container">
            <div className="parent">
                {items.map((item) => (
                    <div key={item?.oeuvres.id} className="main-node">
                        <OeuvreNode oeuvre={item?.oeuvres} />
                    </div>
                ))}
                <PentagonIcon className="pentagon"/>
            </div>
        </div>
    )
}