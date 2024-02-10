import type { MouseEventHandler } from "react";
import type { DBPentagram } from "../types";
import { useState } from "react";
import { useMainNodeItems, useSubNodeItems } from "../hooks";
import OeuvrePentagonWrapper from "./common/OeuvrePentagonWrapper";
import ItemIterator from "$lib/components/common/ItemIterator";
import MainNode from "./common/MainNode";
import SubNode from "./common/SubNode";

import { getAngleAndDisctance } from "../utils";
import { PENTAGRAM } from '../constants';
import './style/pentagramUpdateView.scss'


export default function PentagramUpdateView(props: DBPentagram) {
    const { item } = props
    const { pentagrams_oeuvresCollection: mainNodes, pentagrams_nodesCollection: subNodes } = item
    // TODO selected MainNode 정교화
    const [selectedMainNode, setSelectedMainNode] = useState<null | number>(null)
    const [selectedSubNode, setSelectedSubNode] = useState<null | string>(null)
    const [selectedPosition, setSelectedPosition] = useState<null | {angle : number, distance: number}>(null)
    const mainNodeItems = useMainNodeItems(mainNodes, selectedMainNode)
    const subNodeItems = useSubNodeItems(subNodes, selectedSubNode)

    const nullifySelected = () => {
        setSelectedMainNode(null)
        setSelectedSubNode(null)
        setSelectedPosition(null)
    }

    const handleClickMainNode = (index: number) => {
        nullifySelected()
        setSelectedMainNode(index)
    }

    const handleClickSubNode = (id: string) => {
        nullifySelected()
        setSelectedSubNode(id)
    }
    
    const handleClickParent: MouseEventHandler<HTMLDivElement> = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const { angle, distance, error } = getAngleAndDisctance(e, rect, PENTAGRAM.SIDES)
        if (angle && distance) {
            // TODO - PENTAGRAMS_NODES MUTATION
            if (selectedSubNode) console.log(angle, distance, error)
            else {
                nullifySelected()
                setSelectedPosition({angle, distance})
            }
        }
    }

    return (
        <div className="pentagram-update-view-container">
            <OeuvrePentagonWrapper handleClickParent={handleClickParent}>
                <ItemIterator
                    additionalProps={{handleClickNode: handleClickMainNode}}
                    items={mainNodeItems}
                    componentFunction={MainNode}
                />
                {subNodeItems &&
                    <ItemIterator
                        additionalProps={{handleClickNode: handleClickSubNode}}
                        items={subNodeItems}
                        componentFunction={SubNode}
                    />
                }
                {selectedPosition && <SubNode selected item={selectedPosition} />}
            </OeuvrePentagonWrapper>
            {/* TODO UPDATE FORM */}
        </div>
    )
}