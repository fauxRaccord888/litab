import type { DBOeuvresCollection } from "$feature/Pentagram/types";
import type { FirstNodeOfCollection } from "$lib/types/graphql";
import OeuvreNode from "$feature/Oeuvre/components/OeuvreNode";
import "./style/oeuvrePentagon.scss"

type Node = FirstNodeOfCollection<DBOeuvresCollection>
export default function OeuvrePentagon(props: {collection: DBOeuvresCollection | undefined | null}) {
    const { collection } = props;

    const items = Array.from<Node | null>({length:  5})
    collection && collection.edges.forEach((edge) => {
        items[edge.node.index] = edge.node
    })

    return (
        <div className="oeuvre-pentagon-container">
            <div className="parent">
                {items.map((item) => (
                    <div key={item?.oeuvres.id} className="main-node">
                        <OeuvreNode oeuvre={item?.oeuvres} />
                    </div>
                ))}
                <div className="circle" />
            </div>
        </div>
    )
}