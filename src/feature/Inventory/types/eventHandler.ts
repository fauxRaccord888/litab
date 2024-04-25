import type { FetchResult } from "@apollo/client"
import type { BaseEventHandler } from "$lib/types"
import type { InventoryKey } from "./entity"

export type RenamePayload = {
    id: string
    name: string
}

export type DeletePayload = {
    id: string
}

type InventoryEvent = {
    create: () => Promise<FetchResult>
    rename: ( payload: RenamePayload ) => Promise<FetchResult>,
    delete: ( payload: DeletePayload ) => Promise<FetchResult>
}

export type InventoryLoadMorePayload = {
    shadowLimit: number,
    oceanLimit: number,
    cosmosLimit: number,
}

export type InventoryEventHandler = 
    BaseEventHandler<InventoryLoadMorePayload> & 
    Record<Lowercase<InventoryKey>, InventoryEvent>