import type { ShadowsMinimalInfoFragment } from "$lib/graphql/__generated__/graphql"

export type DBShadow = ShadowsMinimalInfoFragment

export type BoidsKey = keyof DBShadow