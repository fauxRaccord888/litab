import { isInside } from "$feature/Pentagram/utils"
import { boxMullerRandom } from "./createRandomizedObject";

export function pickPointInside(width: number, height: number, sides: number): [number, number]{
    const xArgs = { min: -width/2, max: width/2, skew: 1 }
    const yArgs = { min: -height/2, max: height/2, skew: 1 }

    let x = boxMullerRandom({...xArgs, prng: Math.random})
    let y = boxMullerRandom({...yArgs, prng: Math.random})

    const radius = width / 2
    while (!isInside(y, x, radius, sides)) {
        x = boxMullerRandom({...xArgs, prng: Math.random})
        y = boxMullerRandom({...yArgs, prng: Math.random})
    }
    x += width/2
    y += height/2
    return [x, y]
}