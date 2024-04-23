import type { DBCosmos, DBShadow, DBWorley } from "$feature/PentagramDecoration"

export type TInventoryFields = Record<string, 
    string | number | (number | null)[]
>

export type InventoryItems = DBShadow | DBCosmos | DBWorley