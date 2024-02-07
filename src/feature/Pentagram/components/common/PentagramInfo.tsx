import type { DBPentagram } from "$feature/Pentagram/types";
import { useTranslatedRelativeTime } from "$lib/hooks";
import MiniProfile from "$feature/Profile/MiniProfile";
import OeuvrePentagon from "./OeuvrePentagon";

import './style/pentagramInfo.scss'

export default function PentagramInfo(props: DBPentagram & { feed?: boolean }) {
    const { title, created_at, description, users, pentagrams_oeuvresCollection, feed } = props
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
            <OeuvrePentagon collection={pentagrams_oeuvresCollection}/>
            {!feed && <p className="pentagram-description">{description}</p>}
        </div>
    )
}
