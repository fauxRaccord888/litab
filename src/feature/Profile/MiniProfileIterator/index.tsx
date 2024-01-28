import type { IHeaderProfileProps } from "$feature/Profile/types";
import type { PropsWithStatus } from "$lib/types/components";
import type { FollowingsMiniProfileFragment } from "$lib/graphql/__generated__/graphql";

import MiniProfile from "$feature/Profile/MiniProfile";
import ItemIterator from "$lib/components/common/ItemIterator";
import './style/miniProfileIterator.scss'

interface MiniProfileIteratorProps {
    items : FollowingsMiniProfileFragment,
    action: {
        handleFollow?: (id: string) => void,
        handleShowProfile?: (id: string) => void
    },
}

export default function MiniProfileIterator(props: PropsWithStatus<MiniProfileIteratorProps>) {
    // TODO error, pending component
    if (props.status === 'error') return null
    if (props.status === 'pending') return null

    const items = props.items.edges.map((edge):IHeaderProfileProps => ({
        id: edge.node.id,
        profile: edge.node,
        action: {
            handleFollow: props.action?.handleFollow,
            handleShowProfile: props.action?.handleShowProfile
        }
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