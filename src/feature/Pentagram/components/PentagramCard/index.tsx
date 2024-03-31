import type { DBPentagram_SELECT, PentagramEventHandler, PentagramSelectOptions, PentagramSelectRenderConfig } from "../../types";
import type { UnprocessedContext } from "$lib/types/components";
import type { OeuvreEventHandler } from "$feature/Oeuvre/types";

import SelectMetaInfo from "./SelectMetaInfo";
import SelectMainPentagon from "./SelectMainPentagon";
import SelectDescription from "./SelectDescription";
import SelectRevisionList from "./SelectRevisionList";
import './style/pentagramSelectView.scss'

export type PentagramCardProps = {
    item: DBPentagram_SELECT,
    options: PentagramSelectOptions,
    renderConfig: PentagramSelectRenderConfig,
    eventHandler: PentagramEventHandler & OeuvreEventHandler,
    context: UnprocessedContext,
    timestamp: Date
}

export default function PentagramCard(props: PentagramCardProps) {
    const { item, renderConfig, options, eventHandler, timestamp, context } = props
    const { id, users, created_at, description, pentagram_nodesCollection, pentagram_revisionsCollection } = item

    return (
        <div className="pentagram-card-component">
            <SelectMetaInfo 
                id={id}
                users={users} 
                created_at={created_at} 
                eventHandler={eventHandler}
                context={context}
            />
            <div className="pentagram-card-component__main-container">
                {renderConfig.mainPentagon && 
                    <SelectMainPentagon 
                        timestamp={timestamp}
                        eventHandler={eventHandler}
                        pentagram_nodesCollection={pentagram_nodesCollection}
                    />
                }
            </div>
            {renderConfig.description &&
                <div className="pentagram-card-component__description-container">
                    <SelectDescription description={description}/>
                </div>
            }
            {renderConfig.revision &&
                <SelectRevisionList 
                    pentagram_revisionsCollection={pentagram_revisionsCollection}
                    eventHandler={eventHandler}
                    options={options}
                />
            }
        </div>
    )
}
