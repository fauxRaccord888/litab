import type { DecorationType, DecorationsMinimalInfoFragment, InventoryInfoFragment } from "$lib/graphql/__generated__/graphql"
import type { ConstantsWithRange } from "$lib/utils"

export type DBDecoration = DecorationsMinimalInfoFragment
export type DBInventory = InventoryInfoFragment["decorationsCollection"]

export type DecorationConstants = Record<DecorationType, Record<string, ConstantsWithRange>>