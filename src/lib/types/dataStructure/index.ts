export type DoubleLinkedNode<T=unknown> = {
    value: T
    prev?: DoubleLinkedNode<T> | null | undefined
    next?: DoubleLinkedNode<T> | null | undefined
}

export type ObjectKey = string | number | symbol