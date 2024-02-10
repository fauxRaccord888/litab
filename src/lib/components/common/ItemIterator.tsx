import { Fragment } from "react"

type MinimalProp = {
    item: {
        id?: string 
    } | null | undefined
}

interface ItemIteratorProps<T extends MinimalProp> {
    items: T[],
    additionalProps?: Record<string, unknown>,
    componentFunction: (p: T) => JSX.Element
}

export default function ItemIterator<T extends MinimalProp>(props: ItemIteratorProps<T>) {
    const { items, additionalProps, componentFunction } = props

    return (
        <>
            {items.map((i, idx) => (
                <Fragment key={i.item?.id || idx}>
                    {componentFunction({...i, ...additionalProps})}
                </Fragment>
            ))}
        </>
    )
}