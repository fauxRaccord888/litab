import type { IDynamicObject } from '../../types'
import type { InventoryEntities } from '$feature/Inventory/types'
import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'
import { animationLoop } from '../function'
import { SeedFactory } from '$feature/Inventory/function/factory'


export function usePentagramDecorativeAnimation(
    sides: number,
    canvasRef: RefObject<HTMLCanvasElement>,
    seeds?: (InventoryEntities | null)[],
    ms = 50
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
            const bucket: IDynamicObject[] = []
            dynamicObjRef.current = bucket
            seeds.forEach((seed) => {
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
    }, [canvasRef, ms, seeds, sides])
}