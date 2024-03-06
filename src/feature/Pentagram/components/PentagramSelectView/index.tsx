import type { DBPentagram_SELECT } from "../../types";
import type { ISlotRenderConfig } from '$feature/template/type';
import type { FormatProps } from "$lib/types/components";

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
type PentagramEventHandler = {
    'node'?: (nodeId: string) => void,
    'interaction'?: () => void,
    'revision'?: (revisionId: string) => void 
}

export type PentagramSelectViewProps = FormatProps<DBPentagram_SELECT> & {
    options: PentagramSelectOptions,
    renderConfig: PentagramSelectRenderConfig,
    eventHandler: PentagramEventHandler
}

export default function PentagramSelectView(props: PentagramSelectViewProps) {
    const { item, renderConfig, options, eventHandler } = props
    const { users, created_at, description, pentagram_nodesCollection, pentagram_revisionsCollection } = item

    return (
        <div className="pentagram-select-view-component">
            <SelectMetaInfo 
                users={users} 
                created_at={created_at} 
                handleClickInteraction={eventHandler.interaction}
            />
            <div className="pentagram-select-view-component__main-container">
                {renderConfig.mainPentagon && 
                    <SelectMainPentagon 
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
