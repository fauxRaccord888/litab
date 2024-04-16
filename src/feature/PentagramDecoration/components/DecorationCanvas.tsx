import type { DBBoids } from "../Boids/types";
import { useRef } from "react";
import { useCSSVariables } from "$lib/hooks/useCSSVariables";
import { usePentagramBoidsAnimation } from "../Boids/hooks";
import "./style/decorationCanvas.scss"

type DecorationCanvasProps = {
    boids?: DBBoids[]
}

export default function DecorationCanvas(props: DecorationCanvasProps) {
    const { boids } = props
    const STYLE = useCSSVariables()
    const canvasSize = Number(STYLE.node) * Number(STYLE.pentagonCanvasComponentMultiplier)
    const canvasRef = useRef(null)
    
    usePentagramBoidsAnimation(canvasRef, STYLE, boids)

    return (
        <canvas 
            className="decoration-canvas-component" 
            width={canvasSize}
            height={canvasSize}
            ref={canvasRef} 
        />
    )
}