import type { CSSProperties, MouseEventHandler } from 'react';
import type { DBSubNodes } from '../../types';
import OeuvreNode from '$feature/Oeuvre/components/OeuvreNode';
import './style/pentagramNodes.scss'

interface SubNodeStyle extends CSSProperties {
    '--offset-multiplier': number,
    '--degrees': string
}

type SubNodeProps = DBSubNodes & {
    handleClickNode?: (id: string) => void
}

export default function SubNode(props: SubNodeProps) {
    const { item, handleClickNode, selected, ...restProps } = props
    const { angle, distance, oeuvres } = item
    const style: SubNodeStyle = {
        '--offset-multiplier': distance / 100,
        '--degrees': `${angle}deg`
    }

    const handleClick:MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if(handleClickNode && item.oeuvres) handleClickNode(item.oeuvres?.id)
    }
    
    return (
        <div {...restProps} onClick={handleClick} className="pentagram-node pentagram-sub-node" style={style}>
            {oeuvres && <OeuvreNode selected={selected} item={oeuvres} />}
            {!oeuvres && <OeuvreNode selected item={oeuvres} />}
        </div>
    )
}