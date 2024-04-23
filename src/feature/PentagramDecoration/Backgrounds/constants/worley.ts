import type { ConstantsWithRange } from "$lib/utils/createRandomizedObject";
import type { WorleyKey } from "../types";
import type { ConstantOmitKey } from "../../types"

type Key = Exclude<WorleyKey, ConstantOmitKey | "color" >

export const WORLEY: Record<Key, ConstantsWithRange> = {
    gridCount: {
        min: 7,
        max: 9,
        skew: 1,
        isInt: true
    },
    movementParam: {
        min: 0.8,
        max: 1.5,
        skew: 1,
    },
    limit: {
        min: 145,
        max: 255,
        skew: 2,
        isInt: true
    }
}