import type { PropsWithChildren } from "react"
import "./style/fallbackRoot.scss"

export default function FallbackRoot(props: PropsWithChildren) {
    return (
        <div className="fallback-root-component">
            {props.children}
        </div>
    )
}