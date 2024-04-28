import type { DBDecoration } from "$feature/Inventory/types";
import type { CustomCanvasCSSProps } from "$lib/types";
import { useRef } from "react";
import { usePentagramDecorativeAnimation } from "..//hooks";
import "./style/decorationCanvas.scss"

type DecorationCanvasProps = {
    backgroundSeeds?: (DBDecoration | null)[]
    foregroundSeeds?: (DBDecoration | null)[],
    canvasSize: number
    sides: number
}

export default function DecorationCanvas(props: DecorationCanvasProps) {
    const { backgroundSeeds, foregroundSeeds, sides, canvasSize } = props
    const bgCanvasRef = useRef<HTMLCanvasElement | null>(null)
    const foregroundCanvasRef = useRef<HTMLCanvasElement | null>(null)

    const style: CustomCanvasCSSProps = { "--canvas-size": canvasSize }

    usePentagramDecorativeAnimation(sides, bgCanvasRef, backgroundSeeds, 50)
    usePentagramDecorativeAnimation(sides, foregroundCanvasRef, foregroundSeeds)

    return (
        <>
            <canvas 
                className="decoration-canvas-component" 
                style={style}
                width={canvasSize}
                height={canvasSize}
                ref={bgCanvasRef} 
            />
            <canvas 
                className="decoration-canvas-component" 
                style={style}
                width={canvasSize}
                height={canvasSize}
                ref={foregroundCanvasRef} 
            />
        </>
    )
}