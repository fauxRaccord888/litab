import type { DBPentagram_SELECT, PentagramEventHandler, PentagramSelectOptions } from '../types';
import PentagramCard from '$feature/Pentagram/components/PentagramCard';
import './style/pentagramSelectView.scss'

type PentagramSelectViewProps = {
    item: DBPentagram_SELECT,
    eventHandler: PentagramEventHandler
    options?: PentagramSelectOptions,
}

export default function PentagramSelectView(props: PentagramSelectViewProps) {
    const { item, eventHandler, options } = props

    return (
        <div className="pentagram-select-view-component">
            <div className="pentagram-select-view-component__inner-container">
                <PentagramCard
                    item={item}
                    renderConfig={{
                        metaInfo: true,
                        mainPentagon: true,
                        description: true,
                        revision: true,
                        player: true
                    }}
                    eventHandler={eventHandler}
                    options={{...options}}
                />
            </div>
        </div>
    )
}