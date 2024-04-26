import type { IDynamicObject } from '../../types'
import type { RefObject } from 'react'
import type { DBDecoration } from '$feature/Inventory/types'
import { useEffect, useRef } from 'react'
import { animationLoop } from '../function'
import { SeedFactory } from '$feature/Inventory/function/factory'


export function usePentagramDecorativeAnimation(
    sides: number,
    canvasRef: RefObject<HTMLCanvasElement>,
    decorations?: (DBDecoration | null)[],
    ms = 50
) {
    const animationIntervalRef = useRef<(() => void) | null>(null)
    const dynamicObjRef = useRef<IDynamicObject[] | null>(null)
    
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d")
        const obj = dynamicObjRef.current
        
        if (animationIntervalRef.current) return
        if (!canvas || !ctx || !decorations) return

        if (!obj?.length) {
            const bucket: IDynamicObject[] = []
            dynamicObjRef.current = bucket
            decorations.forEach((seed) => {
                if (!seed) return
                const animationInstance = SeedFactory.createAnimationInstance(seed, canvas, bucket, sides)
                if (animationInstance) bucket.push(animationInstance)
            })
        }

        const intervalId = setInterval(() => {
            animationLoop({
                ctx,
                canvas,
                dynamics: dynamicObjRef.current,
                onComplete: animationIntervalRef.current
            })
        }, ms)

        animationIntervalRef.current = () => clearInterval(intervalId)

        return () => {
            if (animationIntervalRef.current) animationIntervalRef.current()
            animationIntervalRef.current = null
        }
    }, [canvasRef, ms, decorations, sides])
}