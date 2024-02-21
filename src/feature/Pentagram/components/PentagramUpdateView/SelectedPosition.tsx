import type { AppRootState } from '$lib/stores/store';
import { useSelector } from 'react-redux';
import PlusIcon from '$lib/components/icons/PlusIcon';
import PositionAdjuster from '../common/PositionAdjuster';

import "./style/pentagramNode.scss"
import "./style/selectedPosition.scss"

type HandleDrag = (e: { clientX: number, clientY: number }) => void

export default function SelectedPosition(props: { handleDrag?: HandleDrag }) {
    const { handleDrag } = props
    const { angle, distance } = useSelector((state: AppRootState) => state.pentagramUpsert.selectedPosition)
    
    return (
        <>
            {
                typeof angle === 'number' && 
                typeof distance === 'number' &&
                <PositionAdjuster angle={angle} distance={distance}>
                    <div className="selected-position-container pentagram-node" onDrag={handleDrag}>
                        <PlusIcon />
                    </div>
                </PositionAdjuster>
            }
        </>
    )
}