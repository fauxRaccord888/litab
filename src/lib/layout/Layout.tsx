import { PropsWithChildren, ReactNode } from "react"
import './style/layout.scss'

interface LayoutProps extends PropsWithChildren{
    left?: ReactNode
    right?: ReactNode
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <div id="portal-root" className="portal-root"></div>
            <div className="main-container">
                <div className="left-sidebar-section">
                    {props.left}
                </div>

                <div className="main-section">
                    {props.children}
                </div>

                <div className="right-sidebar-section">
                    {props.right}
                </div>
            </div>
        </>
    )
}
