import type { FeedItems } from "../..//type"
import type { FormatProps } from '$lib/types/components';

import { useTranslation } from "react-i18next"
import PentagonIcon from "$lib/components/icons/PentagonIcon"

import "./style/feedMessage.scss"

export default function FeedMessage(props: FormatProps<FeedItems>) {
    const { t } = useTranslation()
    const { item } = props
    const { __typename, users } = item
    let icon = null
    let message = null
        
    if (__typename === "pentagrams") {
        message = t('feed.message.pentagram', { user: users.mutable_id })
        icon = <PentagonIcon className="pentagram-icon"/>
    }

    return (
        <>
            {icon && message &&
                <div className="feed-message-container">
                    <span className="icon-container">{icon}</span>
                    <span className="meta-info">{message}</span>
                </div>
            }
        </>
    )
}