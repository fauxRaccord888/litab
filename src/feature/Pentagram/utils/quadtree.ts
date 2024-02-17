// https://github.com/timohausmann/quadtree-ts의 코드를 상황에 맞게 변형함

import { PENTAGRAM } from "../constants"

export type QuadtreeNode = {
    objects: Bounds[]
    nodes: QuadtreeNode[]
    bounds: Bounds
    level: number,
    maxDepth: number
}

type Bounds = {
    id?: string,
    x: number,
    y: number,
    width: number,
    height: number,
}

type Position = {
    angle: number,
    distance: number,
    id?: string | undefined
}

type PositionWithId = Position & {
    id: string
}

export class Quadtree {
    static insertNodeByPosition(qtNode: QuadtreeNode, position: PositionWithId) {
        const bound = Quadtree.calcBound(position)
        Quadtree.insert(qtNode, bound)
    }

    static checkCollidingByPosition(qtNode: QuadtreeNode, position: Position) {
        const obj = Quadtree.calcBound(position)
        const collidable = Quadtree.retrieve(qtNode, obj)

        return collidable.some((b) => Quadtree.checkColliding(b, obj))
    }

    static createNode(bounds:Bounds, level=0, maxDepth=9): QuadtreeNode {
        return {
            level,
            bounds,
            maxDepth,
            objects: [],
            nodes: [],
        }
    }

    private static checkColliding(bound: Bounds, obj: Bounds) {
        const objX = obj.x + (obj.width / 2)
        const objY = obj.y + (obj.height / 2)
        const boundX = bound.x + (bound.width / 2)
        const boundY = bound.y + (bound.height / 2)
        
        const dist = Quadtree.getDistance(objX, objY, boundX, boundY)
        if (dist < obj.width*Math.sqrt(2) + bound.width * Math.sqrt(2)) {
            return true
        }
        return false
    }

    private static getIndice(qtNode: QuadtreeNode, obj: Bounds): number[] {
        const { x: oldX, y: oldY, width: oldWidth, height: oldHeight } = qtNode.bounds
        const width = oldWidth / 2
        const height = oldHeight / 2

        const qtIndice = []
        for (let i = 0; i < 4; i++) {
            const bound = {
                width,
                height,
                x: oldX + width * (i%2),
                y: oldY + height * Math.floor(i/2),
            }

            if (Quadtree.checkColliding(bound, obj)) {
                qtIndice.push(i)
            }
        }
        
        return qtIndice
    }

    private static split(qtNode: QuadtreeNode) {
        const level = qtNode.level + 1
        const { x: oldX, y: oldY, width: oldWidth, height: oldHeight } = qtNode.bounds
        const width = oldWidth / 2
        const height = oldHeight / 2

        for (let i = 0; i < 4; i++) {
            qtNode.nodes.push(
                Quadtree.createNode({
                    width,
                    height,
                    x: oldX + width * (i%2),
                    y: oldY + height * Math.floor(i/2),
                }, level)
            )
        }
    }

    private static insert(qtNode: QuadtreeNode, obj:Bounds): void {
        if (qtNode.maxDepth === qtNode.level) return // 같은 좌표의 경우 재귀 탈출 불가

        if (!qtNode.objects.length && !qtNode.nodes.length) {
            qtNode.objects.push(obj)
            return
        }

        if (qtNode.objects.some((item) => item.id === obj.id)) return
        
        if (!qtNode.nodes.length) {
            Quadtree.split(qtNode)
        }

        const indice = Quadtree.getIndice(qtNode, obj)

        if (qtNode.nodes.length) {
            indice.forEach((index) => {
                Quadtree.insert(qtNode.nodes[index], obj)
                qtNode.objects.forEach((o) => {
                    Quadtree.insert(qtNode.nodes[index], o)
                })
            })
        }

        qtNode.objects = []
    }

    private static retrieve(qtNode: QuadtreeNode, obj: Bounds) {
        let returnObjects = [...qtNode.objects]
        
        const indice = Quadtree.getIndice(qtNode, obj)

        if (qtNode.nodes.length) {
            indice.forEach((index) => {
                returnObjects = returnObjects.concat(
                    Quadtree.retrieve(qtNode.nodes[index], obj)
                )
            })
        }

        if (qtNode.level === 0) {
            return Array.from(new Set(returnObjects))
        }

        return returnObjects
    }

    private static getDistance(x1: number, y1: number, x2: number, y2:number) {
        return ((x2-x1) ** 2 + (y2-y1) ** 2) ** 0.5
    }

    private static calcBound(position: Position) {
        const angle = position.angle + PENTAGRAM.ANGLE_OFFSET
        const x = Math.cos(angle * Math.PI / PENTAGRAM.HALF_CIRCLE) * position.distance + 100
        const y = Math.sin(angle * Math.PI / PENTAGRAM.HALF_CIRCLE) * position.distance + 100
        const size = 10
        return {
            x: x-(size/2),
            y: y-(size/2),
            id: position.id,
            width: size,
            height: size
        }
    }
}

export const quadtreeRoot = Quadtree.createNode({
    x: 0,
    y: 0,
    width: 200,
    height: 200
})