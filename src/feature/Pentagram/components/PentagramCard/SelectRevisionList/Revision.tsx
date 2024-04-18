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
        createdAt,
        pentagramRevisionUpsertRecordsCollection: upsert, 
        pentagramRevisionUpdateRecordsCollection: update, 
        pentagramRevisionRemoveRecordsCollection: remove, 
        pentagramRevisionRecoverRecordsCollection: recover 
    } = item
    
    const relativeTime = useTranslatedRelativeTime(new Date(createdAt))
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
                                <Trans i18nKey={`node.change.${key}`}/>
                            </span>
                            <span className="revision-component__change-count">
                                {value?.totalCount}
                            </span>
                        </span>
                    )
                })}
            </div>
            <span 
                title={String(new Date(createdAt))} 
                className="revision-component__revision-date"
            >
                {relativeTime}
            </span>
        </div>
    )
}
