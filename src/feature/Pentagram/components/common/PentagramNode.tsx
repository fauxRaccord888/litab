import type { CSSProperties, MouseEventHandler, DragEventHandler, TouchEventHandler } from 'react';
import type { DBOeuvre } from '$feature/Oeuvre/types';
import OeuvreNode from '$feature/Oeuvre/components/OeuvreNode';
import './style/pentagramNode.scss'

interface NodeStyle extends CSSProperties {
    '--distance-multiplier': number,
    '--degrees': string
}

type NodeProps = {
    item: { 
        id?: string | undefined, 
        angle: number,
        distance: number, 
        oeuvres?: DBOeuvre | undefined
        selected?: boolean 
    }
    handleClickNode?: (id: string) => void
    handleDrag?: (e: { clientX: number, clientY: number}) => void
}

export default function PentagramNode(props: NodeProps) {
    const { item, handleClickNode, handleDrag, ...restProps } = props
    const { id } = item

    const style: NodeStyle = {
        '--distance-multiplier': (item?.distance || 0) / 100,
        '--degrees': `${item?.angle || 0}deg`
    }

    const handleClick:MouseEventHandler = (e) => {
        e.stopPropagation()
        if(handleClickNode && id) handleClickNode(id)
    }

    const onDragStart: DragEventHandler<HTMLDivElement> = (e) => {
        const img = new Image()
        e.dataTransfer.setDragImage(img, 0, 0);
    }

    const onDrag: DragEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if (handleDrag) handleDrag(e)
    }

    const onTouch: TouchEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if (handleDrag) handleDrag(e.touches[0])
    }

    return (
        <div 
            {...restProps}
            draggable={true}
            onClick={handleClick}
            onDrag={onDrag}
            onTouchMove={onTouch}
            onDragOver={(e) => e.preventDefault()}
            onDragStart={onDragStart}
            style={style}
            className="pentagram-node-container" 
        >
            <OeuvreNode selected={item?.selected} item={item?.oeuvres} />
        </div>
    )
}