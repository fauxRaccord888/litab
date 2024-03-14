import type { IUnmergedChangeInfo } from '../../../../store/pentagramUpsertSlice/interface';
import PendingChanges from './PendingChange';

import "./style/pendingChangeList.scss"

interface PendingChangeProps {
    unmergedNodeInfos: IUnmergedChangeInfo[],
    handleClickRevert?: (id: string) => void;
}

export default function PendingChangeList(props: PendingChangeProps) {
    const { unmergedNodeInfos, handleClickRevert } = props

    return (
        <div className="pending-change-list-component">
            {unmergedNodeInfos.map((item) => 
                <PendingChanges 
                    key={item.id}
                    id={item.id}
                    item={item}
                    handleClickRevert={handleClickRevert}
                />
            )}
        </div>
    )
}