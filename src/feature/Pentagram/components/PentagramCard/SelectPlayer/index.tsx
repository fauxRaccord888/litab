import type { DBPentagram_SELECT, PentagramPlayerEventHandler } from "../../../types";
import { useMemo } from "react";
import PlayIcon from '$lib/components/icons/PlayIcon';
import "./style/selectPlayer.scss"

type SelectPlayerProps = {
    timestamp: Date
    isPlaying: boolean
    pentagramRevisionsCollection: DBPentagram_SELECT["pentagramRevisionsCollection"],
    eventHandler: PentagramPlayerEventHandler
}

export default function SelectPlayer(props: SelectPlayerProps) {    
    const { timestamp, isPlaying, pentagramRevisionsCollection, eventHandler } = props

    const timestamps = useMemo(() => (
        pentagramRevisionsCollection?.edges
            .map((edge) => new Date(edge.node.createdAt))
            .sort((a, b) => a.getTime() - b.getTime()) 
    ), [pentagramRevisionsCollection])

    const onClickPlay = () => {
        if (eventHandler.playPentagram) {
            eventHandler.playPentagram()
        }
    }

    const onClickProgressBar = (date: Date) => {
        if (eventHandler.setTimestamp) {
            eventHandler.setTimestamp(date)
        }
    }

    return (
        <div className="select-player-component">
            <div className="select-player-component__inner-container">
                <div 
                    className={[
                        "select-player-component__play-button",
                        isPlaying ? "select-player-component__play-button--playing" : ""
                    ].join(" ")}
                    onClick={onClickPlay}
                >
                    <PlayIcon />
                </div>
                <div className="select-player-component__progress-bar">
                    {timestamps?.map((t) => (
                        <span 
                            title={String(new Date(t))} 
                            className={[
                                "select-player-component__progress-node",
                                t.getTime() === timestamp.getTime() ? "select-player-component__progress-node--current" : ""
                            ].join(" ")} 
                            onClick={() => onClickProgressBar(t)}
                            
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
