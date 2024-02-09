import type { DBPentagram } from "$feature/Pentagram/types";
import { useTranslatedRelativeTime } from "$lib/hooks";
import MiniProfile from "$feature/Profile/MiniProfile";
import OeuvrePentagon from "./OeuvrePentagon";

import './style/pentagramInfo.scss'

interface PentagramInfoProps {
    pentagram: DBPentagram
    feed?: boolean
}

export default function PentagramInfo(props: PentagramInfoProps) {
    const { pentagram, feed } = props
    const { title, created_at, description, users, pentagrams_oeuvresCollection, pentagrams_nodesCollection } = pentagram
    const relativeTime = useTranslatedRelativeTime(new Date(created_at))

    return (
        <div className="pentagram-info-container">
            <div className="pentagram-title-date-container">
                <span className="pentagram-title">{title}</span>
                <span 
                    className="pentagram-date"
                    title={String(new Date(created_at))}
                >
                    {relativeTime}
                </span>
            </div>

            {!feed && <MiniProfile {...users}/>}
            <OeuvrePentagon 
                mainNodes={pentagrams_oeuvresCollection}
                subNodes={pentagrams_nodesCollection}
            />
            {!feed && <p className="pentagram-description">{description}</p>}
        </div>
    )
}
