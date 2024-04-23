import type { CosmosMinimalInfoFragment, WorleyMinimalInfoFragment } from "$lib/graphql/__generated__/graphql"

export type DBCosmos = CosmosMinimalInfoFragment
export type CosmosKey = keyof DBCosmos

export type DBWorley = WorleyMinimalInfoFragment
export type WorleyKey = keyof DBWorley