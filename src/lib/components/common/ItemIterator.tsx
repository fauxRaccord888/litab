import { Fragment } from "react"

interface MinimalProp {
    id: string
}

interface ItemIteratorProps<T extends MinimalProp> {
    items: T[],
    componentFunction: (p: T) => JSX.Element
}

export default function ItemIterator<T extends MinimalProp>(props: ItemIteratorProps<T>) {
    const { items, componentFunction } = props
    return (
        <>
            {items.map((item) => (
                <Fragment key={item.id}>
                    {componentFunction(item)}
                </Fragment>
            ))}
        </>
    )
}