import type { DBPentagram } from "$feature/Pentagram/types"
import { useTranslation } from "react-i18next"
import PentagonIcon from "$lib/components/icons/PentagonIcon"

import "./style/feedMessage.scss"

// TODO Feed Item typing
export default function FeedMessage(props: DBPentagram) {
    const { t } = useTranslation()
    const { __typename, users } = props
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