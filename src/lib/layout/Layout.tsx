import type { PropsWithChildren, ReactNode } from "react"
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
                    <div className="left-sidebar-section__inner-container">
                            {props.left}
                    </div>
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
