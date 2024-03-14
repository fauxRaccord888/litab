import type { DBAuthUser } from "$feature/auth/type"
import type { CSSProperties } from "react"

export type Nullable<T> = Partial<T> & {
    id: string
}

export interface CustomBackgroundCSSProp extends CSSProperties {
    "--custom-bg": number[],
}


export type RouterContext = {
    currentUser?: DBAuthUser | null | undefined,
}
