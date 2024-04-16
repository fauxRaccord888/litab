import type { DBBoids } from "../types";

export function createBoids(): DBBoids {
    const weightedRandom = (n: number, w = 0.75) => (Math.random() * (1-w) + w) * n;
    const randomColorVal = () => Math.floor(Math.random() * 255)

    return {
        color: [randomColorVal(), randomColorVal(), randomColorVal()],
        bodyLength: weightedRandom(18, 0.5),
        centeringFactor: weightedRandom(0.0015),
        matchingFactor: weightedRandom(0.05),
        minDistance: weightedRandom(25),
        avoidFactor: weightedRandom(0.05),
        turnFactor: weightedRandom(3, 0.5),
        visualRange: weightedRandom(75),
        speedLimit: weightedRandom(8, 0.4),
    }
}
