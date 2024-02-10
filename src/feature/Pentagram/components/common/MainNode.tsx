import type { MouseEventHandler } from 'react';
import type { DBMainNodes } from '../../types';
import OeuvreNode from '$feature/Oeuvre/components/OeuvreNode';
import './style/pentagramNodes.scss'

type MainNodeProps = DBMainNodes & {
    handleClickNode?: (index: number) => void
}

export default function MainNode(props: MainNodeProps) {
    const { item, index, handleClickNode, selected, ...restProps } = props
    
    const handleClick:MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if (handleClickNode && (index || index === 0)) handleClickNode(index)
    }
    return (
        <div 
            {...restProps} 
            onClick={handleClick}
            className="pentagram-node pentagram-main-node"
        >
            <OeuvreNode selected={selected} item={item?.oeuvres}/>
        </div>
    )
}
