import type { Boids, DBBoids } from '../types'
import type { RefObject } from 'react'
import type { useCSSVariables } from '$lib/hooks/useCSSVariables'
import { useEffect, useRef } from 'react'
import { animationLoop, initBoids } from '../animation/boids'

export function usePentagramBoidsAnimation(
    canvasRef: RefObject<HTMLCanvasElement>,
    STYLE: ReturnType<typeof useCSSVariables>,
    boids?: DBBoids[],
) {
    const boidsRef = useRef<Boids[]>([])
    const intervalRef = useRef<null | (() => void)>(null)

    useEffect(() => {
        if (boidsRef.current.length) return
        if (!canvasRef.current) return
        if (!boids) return

        boidsRef.current = initBoids(
            boids, 
            canvasRef.current?.width, 
            canvasRef.current?.height
        )
    }, [canvasRef, boids])

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d")

        if (!canvas || !ctx) return
        if (intervalRef.current) return

        const interval = setInterval(() => {
            boidsRef.current = animationLoop(
                ctx,
                boidsRef.current,
                canvas.width,
                canvas.height,
                STYLE
            )
        }, 50)
        intervalRef.current = () => clearInterval(interval)

        return () => {
            if (intervalRef.current) intervalRef.current()
            intervalRef.current = null
        }
    }, [STYLE, canvasRef])
}