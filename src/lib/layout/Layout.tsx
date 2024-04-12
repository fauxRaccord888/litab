import type { PropsWithChildren, ReactNode } from "react"
import './style/layout.scss'
import { useRouter } from "@tanstack/react-router"
import Button from "$lib/components/common/Button"

interface LayoutProps extends PropsWithChildren{
    left?: ReactNode
    right?: ReactNode
}

export default function Layout(props: LayoutProps) {
    const router = useRouter()
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
                    <div className="main-section__top-nav-bar">
                        <Button onClick={() => router.history.back()}>←</Button>
                    </div>
                    <div className="main-section__inner-container">
                        {props.children}
                    </div>
                </div>

                <div className="right-sidebar-section">
                    {props.right}
                </div>
            </div>
        </>
    )
}
