import type { ProcessedContext } from "$lib/types/components";
import type { MouseEvent } from "react";
import type { DBMiniProfile } from "$feature/Profile/types";
import type { PentagramEventHandler } from "../../../types";
import { useTranslatedRelativeTime } from "$lib/hooks";
import MiniProfile from "$feature/Profile/components/MiniProfile";
import MoreIcon from "$lib/components/icons/MoreIcon";

import './style/selectMetaInfo.scss'

type SelectMetaInfoProps = {
    id: string,
    created_at: string
    users: DBMiniProfile
    eventHandler: PentagramEventHandler
    context: ProcessedContext
}

export default function SelectMetaInfo(props: SelectMetaInfoProps) {    const { id, created_at, users, eventHandler, context } = props
    const relativeTime = useTranslatedRelativeTime(new Date(created_at))

    const onClickIcon = (e: MouseEvent) => {
        e.stopPropagation()
        if (eventHandler.pentagramMenuModal) eventHandler.pentagramMenuModal(id)
    }

    return (
        <div className="select-meta-info-component">
            <div className="select-meta-info-component__main-container">
                <div className="select-meta-info-component__profile-container">
                    <MiniProfile 
                        item={users} 
                        context={context}
                        options={{
                            displayFollow: true
                        }}
                    />
                </div>
                <span 
                    className="select-meta-info-component__date"
                    title={String(new Date(created_at))}
                >
                    {relativeTime}
                </span>
            </div>
            <div className="select-meta-info-component__interaction-container" onClick={onClickIcon}>
                <MoreIcon />
            </div>
        </div>
    )
}
