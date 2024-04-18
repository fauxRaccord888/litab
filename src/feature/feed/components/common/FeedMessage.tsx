import type { FeedItems } from "../../types"
import { useTranslation } from "react-i18next"
import PentagonIcon from "$lib/components/icons/PentagonIcon"
import PenIcon from "$lib/components/icons/PenIcon"

import "./style/feedMessage.scss"

type FeedMessageProps = {
    item: FeedItems
}

export default function FeedMessage(props: FeedMessageProps) {
    const { t } = useTranslation()
    const { item } = props
    const { __typename, id, user } = item
    let icon = null
    let message = null
        
    if (__typename === "PentagramRevisions") {
        const revisionEdge = item?.pentagram.pentagramRevisionsCollection?.edges.at(-1)
        const revisionId = revisionEdge?.node.id
        const isFirstRevision = revisionId === id
        if (isFirstRevision) {
            message = t('feed.message.create', { user: user.mutableId })
            icon = <PenIcon className="feed-message-component__pen-icon"/>
        } else {
            message = t('feed.message.edit', { user: user.mutableId })
            icon = <PentagonIcon className="feed-message-component__pentagram-icon"/>
        }
    }

    return (
        <>
            {icon && message &&
                <div className="feed-message-component">
                    <span className="feed-message-component__icon-container">{icon}</span>
                    <span className="feed-message-component__message">{message}</span>
                </div>
            }
        </>
    )
}