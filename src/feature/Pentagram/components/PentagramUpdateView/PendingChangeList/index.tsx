import type { MutableRefObject } from 'react';
import type { QuadtreeNode } from '../../../utils';
import type { IUnmergedChangeInfo } from '../../../store/pentagramUpsertSlice/interface';
import { useTranslation } from 'react-i18next';
import { useThrottledErrorToast } from '$lib/hooks';
import { usePendingChangeListEventHandler } from '../../../hooks';
import { formatProps } from '$lib/utils';
import toast from 'react-hot-toast';
import PendingChanges from './PendingChange';
import ItemIterator from "$lib/components/common/ItemIterator";

import "./style/pendingChangeList.scss"

interface PendingChangeProps {
    unmergedNodeInfos: IUnmergedChangeInfo[],
    quadtreeRef: MutableRefObject<QuadtreeNode | null>,
}

export default function PendingChangeList(props: PendingChangeProps) {
    const { unmergedNodeInfos, quadtreeRef } = props
    const { t } = useTranslation()
    const errorToast = useThrottledErrorToast()
    const { handleRevertChange } = usePendingChangeListEventHandler(quadtreeRef)

    const handleClickRevert = (id: string) => {
        errorToast(() => {
            handleRevertChange(id)
            toast.success(t("pentagram.toast.success.revertChange"))
        })
    }
    
    return (
        <div className="pending-change-list-container">
            {unmergedNodeInfos && 
                <ItemIterator
                    additionalProps={{
                        handleRevertChange: handleClickRevert
                    }}
                    items={unmergedNodeInfos.map((info) => formatProps(info))}
                    componentFunction={PendingChanges}
                />
            }
        </div>
    )
}