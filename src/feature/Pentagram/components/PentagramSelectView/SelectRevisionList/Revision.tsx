import type { MouseEvent } from "react";
import type { DBPentagramRevisions, PentagramEventHandler } from "../../../types";
import { useTranslatedRelativeTime } from "$lib/hooks";
import { Trans } from "react-i18next";
import "./style/revision.scss"

type RevisionProps = {
    item: DBPentagramRevisions,
    eventHandler?: PentagramEventHandler
}

export default function Revision(props: RevisionProps) {
    const { item, eventHandler } = props
    const {
        created_at,
        pentagram_revision_upsert_recordsCollection: upsert, 
        pentagram_revision_update_recordsCollection: update, 
        pentagram_revision_remove_recordsCollection: remove, 
        pentagram_revision_recover_recordsCollection: recover 
    } = item
    
    const relativeTime = useTranslatedRelativeTime(new Date(created_at))
    const changes = { upsert, update, remove, recover }

    const onClickRevision = (e: MouseEvent) => {
        e.stopPropagation()
        if (eventHandler?.revisionSelectModal) eventHandler.revisionSelectModal(item.id)
    }

    return (
        <div 
            className="revision-component"
            onClick={onClickRevision}    
        >
            <div className="revision-component__change-list">
                {Object.entries(changes).map(([key, value]) => {
                    return Boolean(value?.totalCount) && (
                        <span key={key} className="revision-component__change-count-container">
                            <span className="revision-component__change-type">
                                <Trans i18nKey={`pentagram.changes.${key}`}/>
                            </span>
                            <span className="revision-component__change-count">
                                {value?.totalCount}
                            </span>
                        </span>
                    )
                })}
            </div>
            <span 
                title={String(new Date(created_at))} 
                className="revision-component__revision-date"
            >
                {relativeTime}
            </span>
        </div>
    )
}
