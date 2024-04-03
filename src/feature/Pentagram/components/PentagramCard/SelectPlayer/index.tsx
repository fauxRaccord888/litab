import type { DBPentagram_SELECT, PentagramPlayerEventHandler } from "../../../types";
import { useMemo } from "react";
import PlayIcon from '$lib/components/icons/PlayIcon';
import "./style/selectPlayer.scss"

type SelectPlayerProps = {
    timestamp: Date
    isPlaying: boolean
    pentagram_revisionsCollection: DBPentagram_SELECT["pentagram_revisionsCollection"],
    eventHandler: PentagramPlayerEventHandler
}

export default function SelectPlayer(props: SelectPlayerProps) {    
    const { timestamp, isPlaying, pentagram_revisionsCollection, eventHandler } = props

    const timestamps = useMemo(() => (
        pentagram_revisionsCollection?.edges
            .map((edge) => new Date(edge.node.created_at))
            .sort((a, b) => a.getTime() - b.getTime()) 
    ), [pentagram_revisionsCollection])

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
