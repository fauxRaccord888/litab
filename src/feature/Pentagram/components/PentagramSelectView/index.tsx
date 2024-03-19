import type { DBPentagram_SELECT } from "../../types";
import type { ISlotRenderConfig } from '$feature/template/type';
import type { RouterContext } from "$lib/types/components";

import type { ProcessedContext } from "$lib/types/components";
import SelectMetaInfo from "./SelectMetaInfo";
import SelectMainPentagon from "./SelectMainPentagon";
import SelectDescription from "./SelectDescription";
import SelectRevisionList from "./SelectRevisionList";
import './style/pentagramSelectView.scss'

type PentagramSelectRenderConfigKey = "metaInfo" | "mainPentagon" | "description" | "revision"
type PentagramSelectRenderConfig = ISlotRenderConfig<PentagramSelectRenderConfigKey>
type PentagramSelectOptions = {
    horizontalMain?: boolean | null | undefined,
    displayRevisionIds?: string[] | null | undefined
}

export type PentagramEventHandler = {
    'node'?: (nodeId: string) => void,
    'interaction'?: (pentagramId: string) => void,
    'revision'?: (revisionId: string) => void 
}

export type PentagramSelectViewProps = {
    item: DBPentagram_SELECT,
    options: PentagramSelectOptions,
    renderConfig: PentagramSelectRenderConfig,
    eventHandler: PentagramEventHandler,
    context: ProcessedContext,
    timestamp: Date
}

export default function PentagramSelectView(props: PentagramSelectViewProps) {
    const { item, renderConfig, options, eventHandler, timestamp, context } = props
    const { id, users, created_at, description, pentagram_nodesCollection, pentagram_revisionsCollection } = item

    return (
        <div className="pentagram-select-view-component">
            <SelectMetaInfo 
                id={id}
                users={users} 
                created_at={created_at} 
                handleClickInteraction={eventHandler.interaction}
                context={context}
            />
            <div className="pentagram-select-view-component__main-container">
                {renderConfig.mainPentagon && 
                    <SelectMainPentagon 
                        timestamp={timestamp}
                        handleClickNode={eventHandler.node}
                        pentagram_nodesCollection={pentagram_nodesCollection}
                    />
                }
                {(renderConfig.description && !options.horizontalMain) &&
                    <div className="pentagram-select-view-component__description-container">
                        <SelectDescription description={description}/>
                    </div>
                }
            </div>
            {(renderConfig.description && options.horizontalMain) &&
                <div className="pentagram-select-view-component__description-container">
                    <SelectDescription description={description}/>
                </div>
            }
            {renderConfig.revision &&
                <SelectRevisionList 
                    displayRevisionIds={options.displayRevisionIds}
                    pentagram_revisionsCollection={pentagram_revisionsCollection}
                    handleClickRevision={eventHandler.revision}
                />
            }
        </div>
    )
}
