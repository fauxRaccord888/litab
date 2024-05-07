import type { ConstantsWithRange } from "$lib/utils";

export const COSMOS = {
    starCount: {
        min: 35,
        max: 45,
        skew: 2,
        isInt: true
    },
    shootingStarCount: {
        min: 1,
        max: 5,
        skew: 1,
        isInt: true
    },
    speedParam: {
        min: 0.4,
        max: 1.5,
        skew: 2,
    },
    sizeParam: {
        min: 1.5,
        max: 4,
        skew: 2
    }
} satisfies Record<string, ConstantsWithRange>