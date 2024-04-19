import { isInside } from "$feature/Pentagram/utils"
import { boxMullerRandom } from "./createRandomizedObject";

export function pickPointInside(width: number, height: number, sides: number): [number, number]{
    let x = boxMullerRandom(-width/2, width/2, 1)
    let y = boxMullerRandom(-height/2, height/2, 1)

    const radius = width / 2
    while (!isInside(y, x, radius, sides)) {
        x = boxMullerRandom(-width/2, width/2, 1)
        y = boxMullerRandom(-height/2, height/2, 1)
    }
    x += width/2
    y += height/2
    return [x, y]
}