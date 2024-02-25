import type { FormatProps } from "$lib/types/components"
import { Fragment } from "react"

interface ItemIteratorProps<I, P> {
    items: FormatProps<I>[],
    additionalProps: P,
    componentFunction: (p: (FormatProps<I> & P)) => JSX.Element
}

export default function ItemIterator<I, P>(props: ItemIteratorProps<I, P>) {
    const { items, additionalProps, componentFunction } = props

    return (
        <>
            {items.map((i) => (
                <Fragment key={i.id}>
                    {componentFunction(Object.assign({}, i, additionalProps))}
                </Fragment>
            ))}
        </>
    )
}