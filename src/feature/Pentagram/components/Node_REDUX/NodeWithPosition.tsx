import { useRef, type CSSProperties, type MouseEventHandler, DragEventHandler } from 'react';
import type { DBOeuvre } from '$feature/Oeuvre/types';
import OeuvreNode from '$feature/Oeuvre/components/OeuvreNode';

interface SubNodeStyle extends CSSProperties {
    '--offset-multiplier': number,
    '--degrees': string
}

type SubNodeProps = {
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

export default function NodeWithPosition(props: SubNodeProps) {
    const { item, handleClickNode, handleDrag, ...restProps } = props
    const { id } = item

    const nodeRef = useRef<HTMLDivElement | null>(null)

    const style: SubNodeStyle = {
        '--offset-multiplier': (item?.distance || 0) / 100,
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

    return (
        <div 
            {...restProps}
            ref={nodeRef}
            draggable={true}
            onClick={handleClick}
            onDrag={onDrag}
            onDragOver={(e) => e.preventDefault()}
            onDragStart={onDragStart}
            style={style}
            className="pentagram-node pentagram-sub-node" 
        >
            <OeuvreNode selected={item?.selected} item={item?.oeuvres} />
        </div>
    )
}