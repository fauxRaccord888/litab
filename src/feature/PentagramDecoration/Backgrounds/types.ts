import type { CosmosMinimalInfoFragment, OceanMinimalInfoFragment } from "$lib/graphql/__generated__/graphql"

export type DBCosmos = CosmosMinimalInfoFragment
export type CosmosKey = keyof DBCosmos

export type DBOcean = OceanMinimalInfoFragment
export type OceanKey = keyof DBOcean