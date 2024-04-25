import type { DBCosmos, DBShadow, DBOcean } from "$feature/PentagramDecoration"
import type { InventoryInfoFragment } from "$lib/graphql/__generated__/graphql"

export type TInventoryFields = Record<string, 
    string | number | (number | null)[]
>

export type DBInventory = InventoryInfoFragment

export type InventoryEntities = DBShadow | DBCosmos | DBOcean
export type InventoryKey = InventoryEntities["__typename"]