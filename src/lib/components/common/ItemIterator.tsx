import { Fragment } from "react"

type MinimalProp<T> = {
    id?: T 
}

interface ItemIteratorProps<T extends MinimalProp<K>, K> {
    items: T[],
    additionalProps?: Partial<T>,
    componentFunction: (p: T) => JSX.Element
}

export default function ItemIterator<T extends MinimalProp<K>, K extends (number | string)>(props: ItemIteratorProps<T, K>) {
    const { items, additionalProps, componentFunction } = props

    return (
        <>
            {items.map((i, idx) => (
                <Fragment key={i?.id || idx}>
                    {componentFunction({...i, ...additionalProps})}
                </Fragment>
            ))}
        </>
    )
}