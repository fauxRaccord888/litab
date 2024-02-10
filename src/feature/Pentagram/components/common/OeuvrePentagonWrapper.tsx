import type { MouseEventHandler, PropsWithChildren } from "react";

import PentagonIcon from "$lib/components/icons/PentagonIcon";
import "./style/oeuvrePentagonWrapper.scss"

interface OeuvrePentagonWrapperProps extends PropsWithChildren {
    handleClickParent?: MouseEventHandler<HTMLDivElement>
}

export default function OeuvrePentagonWrapper(props: OeuvrePentagonWrapperProps) {
    const { children, handleClickParent } = props

    const handleClick:MouseEventHandler<HTMLDivElement> = (e) => {
        if (handleClickParent) handleClickParent(e)
    }

    return (
        <div className="oeuvre-pentagon-wrapper-container">
            <div 
                onClick={handleClick}
                className="parent"
            >
                {children}
                <PentagonIcon className="pentagon"/>
            </div>
        </div>
    )
}
