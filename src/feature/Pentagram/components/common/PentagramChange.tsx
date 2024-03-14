import type { DBMiniOeuvre } from "$feature/Oeuvre/types";
import { Trans } from "react-i18next";
import PositionIcon from "$lib/components/icons/PositionIcon";
import "./style/pentagramChanges.scss"

export type ChangeTypeKey = "upsert" | "update" | "remove" | "recover"
export type TPentagramChange = {
    id: string,
    changeType: ChangeTypeKey,
    oeuvres: DBMiniOeuvre,
    previous_angle?: number | undefined | null
    previous_distance?: number | undefined | null
    current_angle?: number | undefined | null
    current_distance?: number | undefined | null

    created_at?: string
}

type PentagramChangeProps = {
    item: TPentagramChange
}

export default function PentagramChange(props: PentagramChangeProps) {
    const { changeType, oeuvres, previous_angle, previous_distance, current_angle, current_distance } = props.item

    return (
        <div className="pentagram-change-component">
            <div className="pentagram-change-component__main-info-container">
                <span className="pentagram-change-component__change-type">
                    <Trans i18nKey={`pentagram.changes.${changeType}`}/>
                </span>
                <span className="pentagram-change-component__title">{oeuvres?.title}</span>
            </div>
            
            <div className="pentagram-change-component__position-info-container">
                {
                    (
                        typeof previous_angle === 'number' &&
                        typeof previous_distance === 'number'
                    ) &&
                    <div className="pentagram-change-component__position-container">
                        <PositionIcon 
                            className={[
                                "pentagram-change-component__position-icon-component",
                                "pentagram-change-component__position-icon-component--previous"
                            ].join(" ")} 
                        />
                        {`${previous_angle}° ${previous_distance}%`}
                    </div>
                }
                {
                    (
                        typeof current_angle === 'number' &&
                        typeof current_distance === 'number'
                    ) &&
                    <div className="pentagram-change-component__position-container">
                        <PositionIcon 
                            className={[
                                "pentagram-change-component__position-icon-component",
                                "pentagram-change-component__position-icon-component--current"
                            ].join(" ")} 
                        />
                        {`${current_angle}° ${current_distance}%`}
                    </div>
                }
            </div>
        </div>
    )    
}