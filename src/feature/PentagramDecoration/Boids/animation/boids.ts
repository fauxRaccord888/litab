import type { Boids, DBBoids } from "../types";
import type { useCSSVariables } from "$lib/hooks/useCSSVariables";
import { isInside } from "$feature/Pentagram/utils";
import { PENTAGRAM } from "$feature/Pentagram/constants";

function distance(boid1: {x: number, y: number}, boid2: {x: number, y: number}) {
    return Math.sqrt(
        (boid1.x - boid2.x) * (boid1.x - boid2.x) +
        (boid1.y - boid2.y) * (boid1.y - boid2.y),
    );
}

// Constrain a boid to within the window. If it gets too close to an edge,
// nudge it back in and reverse its direction.
// 원형 고려하여 코드 수정 사각형 기준으로 구현된 내용이라 부정확할 수 있음
function keepWithinBounds(boid: Boids, width: number, height: number, STYLE: ReturnType<typeof useCSSVariables>) {
    const MARGIN = 5;
    const radius = Number(STYLE.node) * Number(STYLE.pentagonRadiusMultiplier)
    const midWidth = width / 2
    const midHeight = height / 2
    const isOnVerge = !isInside(boid.y - midHeight, boid.x - midWidth, radius - MARGIN, PENTAGRAM.SIDES)

    if (isOnVerge && boid.x < midWidth) {
        boid.dx += boid.turnFactor;
    }
    if (isOnVerge && boid.x > midWidth) {
        boid.dx -= boid.turnFactor
    }
    if (isOnVerge && boid.y < midHeight) {
        boid.dy += boid.turnFactor;
    }
    if (isOnVerge && boid.y > midHeight) {
        boid.dy -= boid.turnFactor;
    }

    return boid
}

// Find the center of mass of the other boids and adjust velocity slightly to
// point towards the center of mass.
function flyTowardsCenter(boid: Boids, boids: Boids[]) {
    let centerX = 0;
    let centerY = 0;
    let numNeighbors = 0;

    for (const otherBoid of boids) {
        if (distance(boid, otherBoid) < boid.visualRange) {
            centerX += otherBoid.x;
            centerY += otherBoid.y;
            numNeighbors += 1;
        }
    }

    if (numNeighbors) {
        centerX = centerX / numNeighbors;
        centerY = centerY / numNeighbors;

        boid.dx += (centerX - boid.x) * boid.centeringFactor;
        boid.dy += (centerY - boid.y) * boid.centeringFactor;
    }

    return boid
}

// Move away from other boids that are too close to avoid colliding
function avoidOthers(boid: Boids, boids: Boids[]) {
    let moveX = 0;
    let moveY = 0;
    for (const otherBoid of boids) {
        if (otherBoid !== boid) {
            if (distance(boid, otherBoid) < boid.minDistance) {
                moveX += boid.x - otherBoid.x;
                moveY += boid.y - otherBoid.y;
            }
        }
    }

    boid.dx += moveX * boid.avoidFactor;
    boid.dy += moveY * boid.avoidFactor;

    return boid
}

// Find the average velocity (speed and direction) of the other boids and
// adjust velocity slightly to match.
function matchVelocity(boid: Boids, boids: Boids[]) {
    let avgDX = 0;
    let avgDY = 0;
    let numNeighbors = 0;

    for (const otherBoid of boids) {
        if (distance(boid, otherBoid) < boid.visualRange) {
            avgDX += otherBoid.dx;
            avgDY += otherBoid.dy;
            numNeighbors += 1;
        }
    }

    if (numNeighbors) {
        avgDX = avgDX / numNeighbors;
        avgDY = avgDY / numNeighbors;

        boid.dx += (avgDX - boid.dx) * boid.matchingFactor;
        boid.dy += (avgDY - boid.dy) * boid.matchingFactor;
    }

    return boid
}

function limitSpeed(boid: Boids) {
    const speed = Math.sqrt(boid.dx * boid.dx + boid.dy * boid.dy);
    if (speed > boid.speedLimit) {
        boid.dx = (boid.dx / speed) * boid.speedLimit;
        boid.dy = (boid.dy / speed) * boid.speedLimit;
    }
    return boid
}

function drawBoid(ctx: CanvasRenderingContext2D, boid: Boids) {
    ctx.beginPath();

    boid.body.forEach((b, index) => {
        let size
        if ( index < boid.bodyLength / 6 ) {
            size = (boid.bodyLength / 1.5) + index * 1.8
        } else {
            size = boid.bodyLength - index
        }
        const color = `rgba(${boid.color.join(",")}, ${boid.bodyLength - index})`
        ctx.moveTo(b[0], b[1])
        ctx.fillStyle = color
        ctx.fill()
        ctx.ellipse(b[0], b[1], size / 2, size / 2, 0, 0, 2 * Math.PI)
    })
}

function updateBody(boid: Boids) {
    boid.body.pop()
    boid.body.unshift([boid.x, boid.y])
    return boid
}

export function initBoids(initialBoids: DBBoids[], width: number, height: number) {
    const boids: Boids[] = []
    initialBoids.forEach((boid) => {
        const x = width/2 + (Math.random() - 0.5) * width * 0.6
        const y =  height/2 + (Math.random() - 0.5) * height * 0.6
        boids.push({
            ...boid,
            x,
            y,
            dx: Math.random() * 10 - 5,
            dy: Math.random() * 10 - 5,
            body: Array.from({length: boid.bodyLength}).map(() => [x, y])
        })
    })
    
    return boids
}

export function animationLoop(
    ctx: CanvasRenderingContext2D,
    boids: Boids[], 
    width: number, 
    height: number,
    STYLE: ReturnType<typeof useCSSVariables>
) {
    for (let boid of boids) {
        boid = flyTowardsCenter(boid, boids);
        boid = avoidOthers(boid, boids);
        boid = matchVelocity(boid, boids);
        boid = limitSpeed(boid);
        boid = keepWithinBounds(boid, width, height, STYLE);

        boid.x += boid.dx;
        boid.y += boid.dy;
    }
    // Clear the canvas and redraw all the boids in their current positions
    ctx.clearRect(0, 0, width, height);
    boids.map((b) => {
        drawBoid(ctx, b);
        return updateBody(b) 
    })
    return boids
}
