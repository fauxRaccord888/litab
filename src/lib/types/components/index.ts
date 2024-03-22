import type { AppStore } from "$lib/stores/store"
import type { ApolloClient } from "@apollo/client"
import type { DBAuthUser } from "$feature/auth/types"
import type { CSSProperties } from "react"
import { getUserObservable } from "$feature/auth/utils"

export type Nullable<T> = Partial<T> & {
    id: string
}

export interface CustomBackgroundCSSProp extends CSSProperties {
    "--custom-bg": number[],
}

export type UnprocessedContext = {
    store: AppStore,
    apolloClient: ApolloClient<object>,
    userObservable: Awaited<ReturnType<typeof getUserObservable>>
}

export type ProcessedContext = {
    currentUser?: DBAuthUser | null | undefined,
}
