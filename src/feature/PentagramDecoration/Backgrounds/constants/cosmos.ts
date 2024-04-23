import type { ConstantsWithRange } from "$lib/utils/createRandomizedObject";
import type { CosmosKey } from "../types";
import type { ConstantOmitKey } from "../../types"

type Key = Exclude<CosmosKey, ConstantOmitKey | "shootingStarColors" >

export const COSMOS: Record<Key, ConstantsWithRange> = {
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
} 