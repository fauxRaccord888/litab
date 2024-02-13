import type { DBOeuvre } from '$feature/Oeuvre/types';
import type { MouseEventHandler } from 'react';
import OeuvreNode from '$feature/Oeuvre/components/OeuvreNode';

type NodeWithIndexProps = {
    item: {
        id: string, 
        index: number,
        oeuvres?: DBOeuvre | null | undefined
        selected?: boolean 
    }
    handleClickNode?: (id: string, index: number) => void
}

export default function NodeWithIndex(props: NodeWithIndexProps) {
    const { item, handleClickNode, ...restProps } = props
    const { id, index } = item

    const handleClick:MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if (handleClickNode) handleClickNode( id, index )
    }

    return (
        <div 
            {...restProps} 
            onClick={handleClick}
            className="pentagram-node pentagram-main-node"
        >
            <OeuvreNode selected={item?.selected} item={item?.oeuvres}/>
        </div>
    )
}
