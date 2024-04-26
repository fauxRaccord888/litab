import type { FetchResult } from "@apollo/client"
import type { BaseEventHandler } from "$lib/types"
import type { DecorationType } from "$lib/graphql/__generated__/graphql"

export type RenamePayload = {
    id: string
    name: string
    category: DecorationType
}

export type DeletePayload = {
    id: string
    category: DecorationType
}

export type InventoryEventHandler = BaseEventHandler<boolean> & {
    create: ( type: DecorationType ) => Promise<FetchResult>
    rename: ( payload: RenamePayload ) => Promise<FetchResult>,
    delete: ( payload: DeletePayload ) => Promise<FetchResult>
} 