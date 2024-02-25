import type { FormatProps } from "$lib/types/components";
import type { INode, IPendingChange } from "../../../store/pentagramUpsertSlice/interface";
import PositionIcon from "$lib/components/icons/PositionIcon";
import Button from "$lib/components/common/Button";
import { Trans } from "react-i18next";

import "./style/pendingChange.scss"

interface Items {
    id: string
    node: INode | null
    change: IPendingChange
}

type PendingChangesProps = FormatProps<Items> & {
    handleRevertChange: (id: string) => void,
}

const colorToCssVar:Record<IPendingChange["changeType"], string> = {
    'upsert': 'success',
    'update': 'warning',
    'remove': 'danger'
}

export default function PendingChanges(props: PendingChangesProps) {
    const { item, handleRevertChange } = props
    const { id, node, change } = item

    const { changeType } = change
    const title = node?.oeuvres.title || (changeType === 'upsert' && change.oeuvres.title) || ''
    
    return (
        <div className={`pending-change-container bg-${colorToCssVar[changeType]}`}>
            <div className="change-main-container">
                <span className="change-type">
                    <Trans i18nKey={`pentagram.changes.${changeType}`}/>
                </span>
                <span className="title-container">{title}</span>
            </div>
            {/* TODO 컴포넌트 분리 */}
            <div className="position-info-container">
                {
                    node &&
                    <div className="position-container">
                        <PositionIcon className="position-icon fill-danger" />
                        {`${node.angle}° ${node.distance}%`}
                    </div>
                }
                {
                    (changeType === 'update' ||
                    changeType === 'upsert') &&
                    <div className="position-container">
                        <PositionIcon className="position-icon fill-success" />
                        {`${change.angle}° ${change.distance}%`}
                    </div>
                }
            </div>
            <Button danger onClick={() =>  handleRevertChange(id)}>
                <Trans i18nKey="button.delete" />
            </Button>
        </div>
    )
}