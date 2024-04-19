import type { IDynamicObject, IDynamicObjectSeed } from '../types'
import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'
import { animationLoop, hydrateSeed } from '../function'

export function usePentagramDecorativeAnimation(
    seeds: IDynamicObjectSeed[],
    sides: number,
    canvasRef: RefObject<HTMLCanvasElement>,
) {
    const animationIntervalRef = useRef<(() => void) | null>(null)
    const dynamicObjRef = useRef<IDynamicObject[] | null>(null)
    
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d")
        const obj = dynamicObjRef.current
        
        if (animationIntervalRef.current) return
        if (!canvas || !ctx || !seeds) return

        if (!obj?.length) {
            dynamicObjRef.current = hydrateSeed(seeds, sides, canvas, ctx)
        }

        const interval = setInterval(() => {
            animationLoop(
                dynamicObjRef.current,
                ctx,
                canvas,
            )
        }, 50)

        animationIntervalRef.current = () => clearInterval(interval)

        return () => {
            if (animationIntervalRef.current) animationIntervalRef.current()
                animationIntervalRef.current = null
        }
    }, [canvasRef, dynamicObjRef, seeds, sides])
}