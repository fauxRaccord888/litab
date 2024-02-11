import type { DBPentagram } from "$feature/Pentagram/types";
import type { FormatProps } from '$lib/types/components';

import './style/pentagramDetailedInfo.scss'

interface PentagramDetailedInfoProps extends FormatProps<DBPentagram> {
    feed?: boolean
}

export default function PentagramDetailedInfo(props: PentagramDetailedInfoProps) {
    const { item, feed } = props
    const { description } = item

    return (
        <div className="pentagram-detailed-info-container">
            {!feed && <p className="pentagram-description">{description}</p>}
        </div>
    )
}
