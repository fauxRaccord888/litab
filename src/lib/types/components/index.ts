import type { CSSProperties } from "react"

export type Nullable<T> = Partial<T> & {
    id: string
}

export interface CustomBackgroundCSSProps extends CSSProperties {
    "--custom-bg": number[],
}

export interface CustomCanvasCSSProps extends CSSProperties {
    "--canvas-size": number,
}

export type BaseEventHandler<T = void> = {
    handleLoadMore?: (...args: T[]) => void
}