import type { DBPentagram } from "$feature/Pentagram/types";
import type { FormatProps } from '$lib/types/components';
import MiniProfile from "$feature/Profile/MiniProfile";
import { useTranslatedRelativeTime } from "$lib/hooks";

import './style/pentagramMetaInfo.scss'

interface PentagramMetaInfoProps extends FormatProps<DBPentagram> {
    feed?: boolean
}

export default function PentagramMetaInfo(props: PentagramMetaInfoProps) {
    const { item, feed } = props
    const { created_at, users } = item
    const relativeTime = useTranslatedRelativeTime(new Date(created_at))

    return (
        <div className="pentagram-meta-info-container">
            <MiniProfile md item={users}/>
            <span 
                className="pentagram-date"
                title={String(new Date(created_at))}
            >
                {relativeTime}
            </span>
            {!feed && <>{/* TODO MORE INTERACTION */}</>}
        </div>
    )
}
