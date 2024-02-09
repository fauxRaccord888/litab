import type { DBOeuvresCollection, DBPentagramsNodesCollection, DBPentagramsNodes } from "../../types";
import type { DBOeuvre } from "$feature/Oeuvre/types";
import type { CSSProperties, MouseEventHandler } from "react";

import OeuvreNode from "$feature/Oeuvre/components/OeuvreNode";
import PentagonIcon from "$lib/components/icons/PentagonIcon";
import ItemIterator from "$lib/components/common/ItemIterator";

import { getAngleAndDisctance } from "../../utils";
import { PENTAGRAM } from './../../constants';
import "./style/oeuvrePentagon.scss"

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

    const subItems = subNodes?.edges.map((edge) => {
        return {
            ...edge.node,
            id: edge.node.oeuvres.id // COMMENT 하나의 pentagram에 속한 oeuvre는 유일함이 보장됨
        }
    })

    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const { angle, distance, error } = getAngleAndDisctance(e, rect, PENTAGRAM.SIDES)
        // TODO - PENTAGRAMS_NODES MUTATION
        console.log(angle, distance, error)
    }

    return (
        <div className="oeuvre-pentagon-container">
            <div 
                onClick={handleClick}
                className="parent"
            >
                <ItemIterator
                    items={items}
                    componentFunction={MainNode}
                />
                {subItems &&
                    <ItemIterator
                        items={subItems}
                        componentFunction={SubNode}
                    />
                }
                <PentagonIcon className="pentagon"/>
            </div>
        </div>
    )
}


interface SubNodeStyle extends CSSProperties {
    '--offset-multiplier': number,
    '--degrees': string
}

function MainNode(props: DBOeuvre | undefined) {
    return (
        <div className="node main-node">
            <OeuvreNode oeuvre={props}/>
        </div>
    )
}

function SubNode(props: DBPentagramsNodes) {
    const { angle, distance, oeuvres } = props
    const style: SubNodeStyle = {
        '--offset-multiplier': distance / 100,
        '--degrees': `${angle}deg`
    }
    return (
        <div className="node sub-node" style={style}>
            <OeuvreNode oeuvre={oeuvres} />
        </div>
    )
}