import type { ConstantsWithRange } from "$lib/utils";

export const OCEAN = {
    foamThickness: {
        min: 0.05,
        max: 0.12,
        skew: 1
    },
    mulScale: {
        min: 0.9,
        max: 1.4,
        skew: 1
    }
} satisfies Record<string, ConstantsWithRange>