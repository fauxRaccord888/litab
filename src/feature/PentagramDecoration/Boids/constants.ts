import type { ConstantsWithRange } from "$lib/utils/createRandomizedObject";
import type { BoidsKey } from "./types";

type Key = Exclude<BoidsKey, "__typename" | "id" | "color" | "userId" | "name">

export const BOIDS: Record<Key, ConstantsWithRange> = {
    bodyLength: {
        min: 6,
        max: 24,
        skew: 3,
    },
    centeringFactor: {
        min: 0.01,
        max: 0.06,
        skew: 3
    },
    matchingFactor: {
        min: 0.02,
        max: 0.06,
        skew: 1,
    },
    minDistance: {
        min: 5,
        max: 40,
        skew: 3
    },
    avoidFactor: {
        min: 0.02,
        max: 0.06, 
        skew: 1
    },
    turnFactor: {
        min: 1,
        max: 4,
        skew: 2
    },
    visualRange: {
        min: 14,
        max: 40,
        skew: 2
    },
    speedLimit: {
        min: 5,
        max: 12,
        skew: 3
    }
} 