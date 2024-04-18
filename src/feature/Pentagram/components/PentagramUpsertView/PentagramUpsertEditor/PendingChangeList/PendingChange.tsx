import type { MouseEvent } from "react";
import type { IUnmergedChangeInfo } from "../../../../store/pentagramUpsertSlice/interface";
import { Trans } from "react-i18next";
import Button from "$lib/components/common/Button";
import PentagramChange from "../../../common/PentagramChange";

import "./style/pendingChange.scss"

type PendingChangesProps = {
    item: IUnmergedChangeInfo,
    handleClickRevert?: ( id: string) => void,
}

export default function PendingChanges(props: PendingChangesProps) {
    const { item, handleClickRevert } = props 
    const { id, node, change } = item
    const { oeuvre, changeType } = change

    const onClickDelete = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (handleClickRevert) handleClickRevert(id)
    }

    return (
        <div className={`pending-change-component pending-change-component--${changeType}`}>
            {change.changeType === 'remove' &&
                <PentagramChange 
                    item={{
                        id,
                        oeuvre,
                        changeType,
                        previousAngle: node?.angle,
                        previousDistance: node?.distance,
                    }}
                />
            }
            {(
                change.changeType === 'upsert' ||
                change.changeType === 'update' ||
                change.changeType === 'recover'
            ) &&
                <PentagramChange 
                    item={{
                        id,
                        oeuvre,
                        changeType,
                        previousAngle: node?.angle,
                        previousDistance: node?.distance,
                        currentAngle: change?.angle,
                        currentDistance: change?.distance
                    }}
                />
            }
            <Button className="pending-change-component__button-component" danger onClick={onClickDelete}>
                <Trans i18nKey="button.delete" />
            </Button>
        </div>
    )
}