import type { QuadtreeNode } from ".."
import { Quadtree } from ".."
import { PositionError } from "$lib/error/customError"

export function checkCollidingOrThrow (
    node: { angle: number, distance: number, id?: string},
    quadtree: QuadtreeNode | null,
) {
    if (!quadtree) throw new PositionError()
    const colliding = Quadtree.checkCollidingByPosition(quadtree, node)
    if (colliding) throw new PositionError()
}
