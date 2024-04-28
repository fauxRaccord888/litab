import type { DBPentagram_SELECT, PentagramEventHandler, PentagramSelectOptions } from "../../../types";
import { useRef, useState } from "react";
import { useCSSVariables } from "$lib/hooks";
import { useIntersectionObserver } from "$lib/hooks";
import { PENTAGRAM } from "$feature/Pentagram/constants";
import OeuvrePentagonWrapper from "../../common/OeuvrePentagonWrapper";
import PentagramNode from "./PentagramNode";
import DecorationCanvas from "$feature/PentagramDecoration/common/components/DecorationCanvas";

import './style/selectMainPentagon.scss'

type SelectMainPentagonProps = {
    timestamp: Date,
    pentagramDecorationsCollection: DBPentagram_SELECT["pentagramDecorationsCollection"]
    pentagramNodesCollection: DBPentagram_SELECT["pentagramNodesCollection"],
    options: PentagramSelectOptions
    eventHandler: PentagramEventHandler
}

export default function SelectMainPentagon(props: SelectMainPentagonProps) {
    const { timestamp, pentagramDecorationsCollection, pentagramNodesCollection, options, eventHandler } = props
    const items = pentagramNodesCollection?.edges.map((edge) => edge.node)

    const sentinelRef = useRef<HTMLDivElement | null>(null)
    const [inView, setInView] = useState(false)

    const STYLE = useCSSVariables()
    const canvasSize = Number(STYLE.node) * Number(STYLE.pentagonCanvasComponentMultiplier)
    
    const onIntersect = () => setInView(true)
    const onLeave = () => setInView(false)
    useIntersectionObserver(sentinelRef, onIntersect, onLeave)

    const foregroundDecorations = pentagramDecorationsCollection?.edges
        .filter((e) => !e.node.decoration.isBackground)
        .map((e) => e.node.decoration)

    const backgroundDecorations = pentagramDecorationsCollection?.edges
        .filter((e) => e.node.decoration.isBackground)
        .map((e) => e.node.decoration)

    return pentagramNodesCollection && (
        <div className="select-main-pentagon-component">
            <OeuvrePentagonWrapper>
                {items?.map((item) => (
                    <PentagramNode 
                        key={item.id}
                        inView={inView}
                        item={item}
                        options={options}
                        eventHandler={eventHandler}
                        timestamp={timestamp}
                    />
                ))}
                {inView && 
                    <DecorationCanvas 
                        foregroundSeeds={foregroundDecorations}
                        backgroundSeeds={backgroundDecorations}
                        canvasSize={canvasSize} 
                        sides={PENTAGRAM.SIDES}
                    />
                }
            </OeuvrePentagonWrapper>
            <div ref={sentinelRef} className="select-main-pentagon-component__sentinel" />
        </div>
    )
}
