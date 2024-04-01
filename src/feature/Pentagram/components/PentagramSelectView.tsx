import type { DBPentagram_SELECT, PentagramEventHandler, PentagramSelectOptions } from '../types';
import { TIME } from '$feature/Pentagram/constants';
import PentagramCard from '$feature/Pentagram/components/PentagramCard';
import './style/pentagramSelectView.scss'

type PentagramSelectViewProps = {
    item: DBPentagram_SELECT,
    eventHandler: PentagramEventHandler
    options?: PentagramSelectOptions,
}

export default function PentagramSelectView(props: PentagramSelectViewProps) {
    const { item, options, eventHandler } = props

    return (
        <div className="pentagram-select-view-component">
            <div className="pentagram-select-view-component__inner-container">
                <PentagramCard
                    item={item}
                    renderConfig={{
                        metaInfo: true,
                        mainPentagon: true,
                        description: true,
                        revision: true
                    }}
                    eventHandler={eventHandler}
                    options={{...options}}
                    timestamp={new Date(Date.now() + TIME.NOW_OFFSET)}
                />
            </div>
        </div>
    )
}