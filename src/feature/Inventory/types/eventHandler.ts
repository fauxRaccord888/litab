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
    handleCreate?: ( type: DecorationType ) => Promise<FetchResult>
    handleRename?: ( payload: RenamePayload ) => Promise<FetchResult>,
    handleDelete?: ( payload: DeletePayload ) => Promise<FetchResult>
} 