import { isInside } from "$feature/Pentagram/utils"
import { boxMullerRandom } from "./createRandomizedObject";

export function pickPointInside(width: number, height: number, sides: number): [number, number]{
    const xArgs = { min: -width/2, max: width/2, skew: 1 }
    const yArgs = { min: -height/2, max: height/2, skew: 1 }

    let x = boxMullerRandom(xArgs)
    let y = boxMullerRandom(yArgs)

    const radius = width / 2
    while (!isInside(y, x, radius, sides)) {
        x = boxMullerRandom(xArgs)
        y = boxMullerRandom(yArgs)
    }
    x += width/2
    y += height/2
    return [x, y]
}