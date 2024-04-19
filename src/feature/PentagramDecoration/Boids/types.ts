import type { ShadowsMinimalInfoFragment } from "$lib/graphql/__generated__/graphql"

export type DBBoids = ShadowsMinimalInfoFragment

export type BoidsKey = keyof DBBoids

export type Boids = {
    x: number,
    y: number,
    dx: number,
    dy: number,
    body: [number, number][]
} & DBBoids