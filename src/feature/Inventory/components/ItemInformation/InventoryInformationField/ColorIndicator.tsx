import type { CustomBackgroundCSSProps } from "$lib/types"
import hexRgb from "hex-rgb"

export default function ColorIndicator(props: { c: string }) {
    const color = hexRgb(props.c)
    const style = {"--custom-bg" : [color.red, color.green, color.blue]} as CustomBackgroundCSSProps
    return (
        <span 
            style={style}
            className="inventory-field-component__color-indicator"
        />
    )
}
