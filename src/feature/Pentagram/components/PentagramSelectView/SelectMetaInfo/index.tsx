import type { RouterContext } from "$lib/types/components";
import type { MouseEvent } from "react";
import type { DBMiniProfile } from "$feature/Profile/types";
import { useTranslatedRelativeTime } from "$lib/hooks";
import MiniProfile from "$feature/Profile/components/MiniProfile";
import MoreIcon from "$lib/components/icons/MoreIcon";

import './style/selectMetaInfo.scss'

type SelectMetaInfoProps = {
    id: string,
    created_at: string
    users: DBMiniProfile
    handleClickInteraction?: (pentagramId: string) => void
    context: RouterContext
}

export default function SelectMetaInfo(props: SelectMetaInfoProps) {
    const { id, created_at, users, handleClickInteraction, context } = props
    const relativeTime = useTranslatedRelativeTime(new Date(created_at))

    const onClickIcon = (e: MouseEvent) => {
        e.stopPropagation()
        if (handleClickInteraction) handleClickInteraction(id)
    }

    return (
        <div className="select-meta-info-component">
            <div className="select-meta-info-component__main-container">
                <div className="select-meta-info-component__profile-container">
                    <MiniProfile item={users} context={context}/>
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
