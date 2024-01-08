import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
    return (
        <div className="main-container">
            <div className="left-sidebar-section">
                left side bar
            </div>

            <div className="main-section">
                {props.children}
            </div>

            <div className="right-sidebar-section">
                right side bar
            </div>
        </div>
    )
}
