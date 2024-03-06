import type { ForwardedRef, MouseEvent, PropsWithChildren } from "react";
import { forwardRef } from 'react';

import PentagonIcon from "$lib/components/icons/PentagonIcon";
import "./style/oeuvrePentagonWrapper.scss"

interface OeuvrePentagonWrapperProps extends PropsWithChildren {
    handleClickParent?: (e: MouseEvent<HTMLDivElement>) => void,
}

export default forwardRef(function OeuvrePentagonWrapper(props: OeuvrePentagonWrapperProps, ref: ForwardedRef<HTMLDivElement>) {
    const { children, handleClickParent } = props

    const onClickOeuvre = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        if (handleClickParent) handleClickParent(e)
    }

    return (
        <div className="oeuvre-pentagon-wrapper-component">
            <div
                ref={ref} 
                onClick={onClickOeuvre} 
                className="oeuvre-pentagon-wrapper-component__parent"
            >
                {children}
                <PentagonIcon className="oeuvre-pentagon-wrapper-component__pentagon"/>
            </div>
        </div>
    )
})
