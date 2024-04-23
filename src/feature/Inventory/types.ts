import type { InventoryInfoFragment } from "$lib/graphql/__generated__/graphql"
import type { FetchResult } from "@apollo/client"
import type { BaseEventHandler } from "$lib/types"
import type { DBCosmos, DBShadow, DBWorley } from "$feature/PentagramDecoration"

export type TInventoryFields = Record<string, 
    string | number | (string | null)[]
>

export type DBInventory = InventoryInfoFragment

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
    worleyLimit: number,
    cosmosLimit: number,
}

// TODO 인벤토리에 들어올 엔티티가 추가될 경우, 쿼리와 여기에만 "직접" 추가
export type InventoryEntities = DBShadow | DBCosmos | DBWorley
export type InventoryKey = InventoryEntities["__typename"]
export type InventoryEventHandler = 
    BaseEventHandler<InventoryLoadMorePayload> & 
    Record<Lowercase<InventoryKey>, InventoryEvent>