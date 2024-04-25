import type { InventoryEntities } from "$feature/Inventory/types";
import { useRef } from "react";
import { usePentagramDecorativeAnimation } from "..//hooks";
import "./style/decorationCanvas.scss"

type DecorationCanvasProps = {
    backgroundSeeds?: (InventoryEntities | null)[]
    foregroundSeeds?: (InventoryEntities | null)[],
    canvasSize: number
    sides: number
}

export default function DecorationCanvas(props: DecorationCanvasProps) {
    const { backgroundSeeds, foregroundSeeds, sides, canvasSize } = props
    const bgCanvasRef = useRef<HTMLCanvasElement | null>(null)
    const foregroundCanvasRef = useRef<HTMLCanvasElement | null>(null)

    usePentagramDecorativeAnimation(sides, bgCanvasRef, backgroundSeeds, 50)
    usePentagramDecorativeAnimation(sides, foregroundCanvasRef, foregroundSeeds)

    return (
        <>
            <canvas 
                className="decoration-canvas-component" 
                width={canvasSize}
                height={canvasSize}
                ref={bgCanvasRef} 
            />
            <canvas 
                className="decoration-canvas-component" 
                width={canvasSize}
                height={canvasSize}
                ref={foregroundCanvasRef} 
            />
        </>
    )
}