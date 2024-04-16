import type { DBPentagram_SELECT, PentagramEventHandler, PentagramSelectOptions } from "../../../types";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "$lib/hooks";
import { createBoids } from "$feature/PentagramDecoration/Boids/function";
import OeuvrePentagonWrapper from "../../common/OeuvrePentagonWrapper";
import PentagramNode from "./PentagramNode";
import DecorationCanvas from "$feature/PentagramDecoration/components/DecorationCanvas";

import './style/selectMainPentagon.scss'

type SelectMainPentagonProps = {
    timestamp: Date,
    pentagram_nodesCollection: DBPentagram_SELECT["pentagram_nodesCollection"],
    options: PentagramSelectOptions
    eventHandler: PentagramEventHandler
}

export default function SelectMainPentagon(props: SelectMainPentagonProps) {
    const { timestamp, pentagram_nodesCollection, options, eventHandler } = props
    const items = pentagram_nodesCollection?.edges.map((edge) => edge.node)
    const sentinelRef = useRef<HTMLDivElement | null>(null)
    const [inView, setInView] = useState(false)    
    
    const onIntersect = () => setInView(true)
    useIntersectionObserver(sentinelRef, onIntersect)

    // TODO - DB에 boids 추가 및 boids 관련 기능(인벤토리, 펜타그램에 추가) 추가 후 대체
    const boids = Array.from({length: 5}).map(() => createBoids())

    return pentagram_nodesCollection && (
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
                <DecorationCanvas boids={boids}/>
            </OeuvrePentagonWrapper>
            {!inView && <div ref={sentinelRef} className="select-main-pentagon-component__sentinel" />}
        </div>
    )
}
