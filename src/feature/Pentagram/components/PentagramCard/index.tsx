import type { DBPentagram_SELECT, PentagramEventHandler, PentagramPlayerEventHandler, PentagramSelectOptions, PentagramSelectRenderConfig } from "../../types";
import type { OeuvreEventHandler } from "$feature/Oeuvre/types";
import { usePentagramPlayer } from "$feature/Pentagram/hooks";

import SelectMetaInfo from "./SelectMetaInfo";
import SelectMainPentagon from "./SelectMainPentagon";
import SelectPlayer from "./SelectPlayer";
import SelectDescription from "./SelectDescription";
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
    const { id, users, created_at, description, pentagram_nodesCollection, pentagram_revisionsCollection } = item

    const playerEventHandler: PentagramPlayerEventHandler = {
        playPentagram: handlePlayPentagram,
        setTimestamp: handleSetTimestamp
    }

    return (
        <div className="pentagram-card-component">
            <SelectMetaInfo 
                id={id}
                users={users} 
                created_at={created_at} 
                eventHandler={eventHandler}
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
            {renderConfig.player &&
                <div className="pentagram-card-component__description-container">
                    <SelectPlayer 
                        timestamp={timestamp}
                        isPlaying={isPlaying}
                        pentagram_revisionsCollection={pentagram_revisionsCollection} 
                        eventHandler={playerEventHandler} 
                    />
                </div>
            }
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
