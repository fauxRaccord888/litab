import type { ForwardedRef, MouseEventHandler, PropsWithChildren } from "react";
import { forwardRef } from 'react';

import PentagonIcon from "$lib/components/icons/PentagonIcon";
import "./style/oeuvrePentagonWrapper.scss"

interface OeuvrePentagonWrapperProps extends PropsWithChildren {
    handleClickParent?: MouseEventHandler<HTMLDivElement>
}

export default forwardRef(function OeuvrePentagonWrapper(props: OeuvrePentagonWrapperProps, ref: ForwardedRef<HTMLDivElement>) {
    const { children, handleClickParent } = props

    const handleClick:MouseEventHandler<HTMLDivElement> = (e) => {
        if (handleClickParent) handleClickParent(e)
    }

    return (
        <div className="oeuvre-pentagon-wrapper-container">
            <div
                onClick={handleClick} 
                ref={ref} 
                className="parent"
            >
                {children}
                <PentagonIcon className="pentagon"/>
            </div>
        </div>
    )
})
