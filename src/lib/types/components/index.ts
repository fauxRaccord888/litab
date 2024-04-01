import type { CSSProperties } from "react"

export type Nullable<T> = Partial<T> & {
    id: string
}

export interface CustomBackgroundCSSProp extends CSSProperties {
    "--custom-bg": number[],
}

export type BaseEventHandler<T = void> = {
    handleLoadMore: (param: T) => void
}