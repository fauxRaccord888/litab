import type { DBAuthUser } from "$feature/auth/type"
import type { CSSProperties } from "react"
import { getUserObservable } from "$feature/auth/utils"

export type Nullable<T> = Partial<T> & {
    id: string
}

export interface CustomBackgroundCSSProp extends CSSProperties {
    "--custom-bg": number[],
}

export type UnprocessedContext = {
    userObservable: Awaited<ReturnType<typeof getUserObservable>>
}

export type ProcessedContext = {
    currentUser?: DBAuthUser | null | undefined,
}
