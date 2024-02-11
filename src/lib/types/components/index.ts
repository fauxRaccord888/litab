export type FormatProps<T=unknown> = {
    id?: string | number
    item: T
}

export type Nullable<T extends FormatProps> = {
    item: T["item"] | undefined | null
}