import type { DBProfiles, ModalMiniProfileProps } from "$feature/Profile/types";
import type { PropsWithStatus } from "$lib/types/components";

import MiniProfile from "../MiniProfile";
import ItemIterator from "$lib/components/common/ItemIterator";
import './style/miniProfileIterator.scss'

export default function MiniProfileIterator(props: PropsWithStatus<ModalMiniProfileProps>) {
    // TODO error, pending component
    if (props.status === 'error') return null
    if (props.status === 'pending') return null

    const { edges } = props

    const items = edges.map((edge):DBProfiles => ({
        ...edge.node,
    }))

    return (
        <div className="user-collection-iterator-container">
            <ItemIterator
                items={items}
                componentFunction={MiniProfile}
            />
        </div>
    )
}