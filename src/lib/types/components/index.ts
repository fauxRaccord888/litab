export type FormatProps<T=unknown> = {
    item: T
}

export type Nullable<T extends FormatProps> = {
    item: T["item"] | undefined | null
}