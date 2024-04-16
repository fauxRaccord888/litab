export type DBBoids = {
    color: [number, number, number],
    bodyLength: number,
    centeringFactor: number,
    matchingFactor: number,
    minDistance: number,
    avoidFactor: number,
    turnFactor: number,
    visualRange: number,
    speedLimit: number
} 

export type Boids = DBBoids & {
    x: number,
    y: number,
    dx: number,
    dy: number,
    body: [number, number][]
}
