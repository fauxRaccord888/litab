import type { IDynamicObjectSeed } from "../types";
import { useRef } from "react";
import { usePentagramDecorativeAnimation } from "..//hooks";
import "./style/decorationCanvas.scss"

type DecorationCanvasProps = {
    seeds: IDynamicObjectSeed[],
    canvasSize: number
    sides: number
}

export default function DecorationCanvas(props: DecorationCanvasProps) {
    const { seeds, sides, canvasSize } = props
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    usePentagramDecorativeAnimation(seeds, sides, canvasRef)

    return (
        <canvas 
            className="decoration-canvas-component" 
            width={canvasSize}
            height={canvasSize}
            ref={canvasRef} 
        />
    )
}