import type { MouseEventHandler, PropsWithChildren } from "react";
import { useMemo } from 'react';
import { createPortal } from "react-dom";
import CloseIcon from "$lib/components/icons/CloseIcon";
import './style/modal.scss'

interface ModalProps extends PropsWithChildren {
    title: string
    handleClickClose: () => void
}

export default function Modal(props: ModalProps) {
    const { title, children, handleClickClose } = props
    const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation()
    const rootElem = useMemo(() => document.getElementById('portal-root'), [])

    return (
        <>
            {rootElem && createPortal(
                <div className="modal-container" onClick={handleClickClose}>
                    <div className="modal-main-container" onClick={stopPropagation} >
                        
                        <div className="title-container">
                            <div className="title-center-placeholder">{}</div>
                            <div className="modal-title">{title}</div>
                            <div className="title-center-placeholder">
                                <button className="close-button" onClick={handleClickClose}>
                                    <CloseIcon />
                                </button>
                            </div>
                        </div>

                        <div className="body-container">
                            <div className="body-inner-container">
                                {children}
                            </div>
                        </div>
                        
                    </div>
                </div>,
            rootElem)}
        </>
    )
}