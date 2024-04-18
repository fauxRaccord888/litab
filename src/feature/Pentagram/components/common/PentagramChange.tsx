import type { DBMiniOeuvre } from "$feature/Oeuvre/types";
import { Trans } from "react-i18next";
import PositionIcon from "$lib/components/icons/PositionIcon";
import "./style/pentagramChanges.scss"

export type ChangeTypeKey = "upsert" | "update" | "remove" | "recover"
export type TPentagramChange = {
    id: string,
    changeType: ChangeTypeKey,
    oeuvre: DBMiniOeuvre,
    previousAngle?: number | undefined | null
    previousDistance?: number | undefined | null
    currentAngle?: number | undefined | null
    currentDistance?: number | undefined | null

    createdAt?: string
}

type PentagramChangeProps = {
    item: TPentagramChange
}

export default function PentagramChange(props: PentagramChangeProps) {
    const { changeType, oeuvre, previousAngle, previousDistance, currentAngle, currentDistance } = props.item

    return (
        <div className="pentagram-change-component">
            <div className="pentagram-change-component__main-info-container">
                <span className="pentagram-change-component__change-type">
                    <Trans i18nKey={`node.change.${changeType}`}/>
                </span>
                <span className="pentagram-change-component__title">{oeuvre?.title}</span>
            </div>
            
            <div className="pentagram-change-component__position-info-container">
                {
                    (
                        typeof previousAngle === 'number' &&
                        typeof previousDistance === 'number'
                    ) &&
                    <div className="pentagram-change-component__position-container">
                        <PositionIcon 
                            className={[
                                "pentagram-change-component__position-icon-component",
                                "pentagram-change-component__position-icon-component--previous"
                            ].join(" ")} 
                        />
                        {`${previousAngle}° ${previousDistance}%`}
                    </div>
                }
                {
                    (
                        typeof currentAngle === 'number' &&
                        typeof currentDistance === 'number'
                    ) &&
                    <div className="pentagram-change-component__position-container">
                        <PositionIcon 
                            className={[
                                "pentagram-change-component__position-icon-component",
                                "pentagram-change-component__position-icon-component--current"
                            ].join(" ")} 
                        />
                        {`${currentAngle}° ${currentDistance}%`}
                    </div>
                }
            </div>
        </div>
    )    
}