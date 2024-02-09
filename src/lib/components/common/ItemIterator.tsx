import { Fragment } from "react"

type MinimalProp = {
    id: string
} | null | undefined

interface ItemIteratorProps<T extends MinimalProp> {
    items: T[],
    componentFunction: (p: T) => JSX.Element
}

export default function ItemIterator<T extends MinimalProp>(props: ItemIteratorProps<T>) {
    const { items, componentFunction } = props
    return (
        <>
            {items.map((item, idx) => (
                <Fragment key={item?.id || idx}>
                    {componentFunction(item)}
                </Fragment>
            ))}
        </>
    )
}