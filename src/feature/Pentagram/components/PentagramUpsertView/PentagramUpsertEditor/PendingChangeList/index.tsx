import type { IUnmergedChangeInfo } from '../../../../store/pentagramUpsertSlice/interface';
import PendingChanges from './PendingChange';
import ItemIterator from "$lib/components/common/ItemIterator";
import { formatProps } from '$lib/utils';

import "./style/pendingChangeList.scss"

interface PendingChangeProps {
    unmergedNodeInfos: IUnmergedChangeInfo[],
    handleClickRevert?: (id: string) => void;
}

export default function PendingChangeList(props: PendingChangeProps) {
    const { unmergedNodeInfos, handleClickRevert } = props
    
    return (
        <div className="pending-change-list-component">
            {unmergedNodeInfos && 
                <ItemIterator
                    additionalProps={{
                        handleClickRevert
                    }}
                    items={unmergedNodeInfos.map((info) => formatProps(info))}
                    componentFunction={PendingChanges}
                />
            }
        </div>
    )
}