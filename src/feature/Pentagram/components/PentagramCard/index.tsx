import type { DBPentagram_SELECT, PentagramEventHandler, PentagramPlayerEventHandler, PentagramSelectOptions, PentagramSelectRenderConfig } from "../../types";
import type { OeuvreEventHandler } from "$feature/Oeuvre/types";
import { usePentagramPlayer } from "$feature/Pentagram/hooks";

import SelectMetaInfo from "./SelectMetaInfo";
import SelectMainPentagon from "./SelectMainPentagon";
import SelectPlayer from "./SelectPlayer";
import SelectRevisionList from "./SelectRevisionList";
import './style/pentagramSelectView.scss'

export type PentagramCardProps = {
    item: DBPentagram_SELECT,
    options: PentagramSelectOptions,
    renderConfig: PentagramSelectRenderConfig,
    eventHandler: PentagramEventHandler & OeuvreEventHandler,
}

export default function PentagramCard(props: PentagramCardProps) {
    const { item, renderConfig, options, eventHandler } = props
    const { timestamp, isPlaying, handlePlayPentagram, handleSetTimestamp } = usePentagramPlayer(item)
    const { id, user, createdAt, pentagramNodesCollection, pentagramRevisionsCollection } = item

    const playerEventHandler: PentagramPlayerEventHandler = {
        playPentagram: handlePlayPentagram,
        setTimestamp: handleSetTimestamp
    }

    return (
        <div className="pentagram-card-component">
            {renderConfig.metaInfo && 
                <SelectMetaInfo 
                    id={id}
                    users={user} 
                    createdAt={createdAt} 
                    eventHandler={eventHandler}
                />
            }
            <div className="pentagram-card-component__main-container">
                {renderConfig.mainPentagon && 
                    <SelectMainPentagon 
                        timestamp={options.forcedTimestamp ?? timestamp}
                        options={options}
                        eventHandler={eventHandler}
                        pentagramNodesCollection={pentagramNodesCollection}
                    />
                }
            </div>
            {renderConfig.player &&
                <div className="pentagram-card-component__select-player-container">
                    <SelectPlayer 
                        timestamp={timestamp}
                        isPlaying={isPlaying}
                        pentagramRevisionsCollection={pentagramRevisionsCollection} 
                        eventHandler={playerEventHandler} 
                    />
                </div>
            }
            {renderConfig.revision &&
                <SelectRevisionList 
                    pentagramRevisionsCollection={pentagramRevisionsCollection}
                    eventHandler={eventHandler}
                    options={options}
                />
            }
        </div>
    )
}
