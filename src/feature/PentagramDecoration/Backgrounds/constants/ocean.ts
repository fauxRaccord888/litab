import type { ConstantOmitKey, OceanKey } from "$feature/PentagramDecoration";
import type { ConstantsWithRange } from "$lib/utils";

type Key = Exclude<OceanKey, ConstantOmitKey | "waterColor" | "foamColor" | "randomSeed">
export const OCEAN: Record<Key, ConstantsWithRange> = {
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

}