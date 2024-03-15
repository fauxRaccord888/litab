import type { MouseEvent, PropsWithChildren } from "react";
import { useRef } from 'react';
import { useResetScroll } from "../hooks";
import { createPortal } from "react-dom";
import CloseIcon from "$lib/components/icons/CloseIcon";
import './style/modal.scss'

interface ModalProps extends PropsWithChildren {
    title: string
    handleClickClose?: () => void
}

export default function Modal(props: ModalProps) {
    const { title, children, handleClickClose } = props
    const ref = useRef<HTMLDivElement | null>(null)
    const rootElem = document.getElementById('portal-root')
    useResetScroll(ref)

    const onClickClose = (e: MouseEvent) => {
        e.stopPropagation()
        if (handleClickClose) handleClickClose()
    }

    return (
        <>
            {rootElem && createPortal(
                <div className="modal-component" onClick={onClickClose}>
                    <div className="modal-component__main-container" onClick={(e) => e.stopPropagation()} >
                        <div className="modal-component__title-container">
                            <div className="modal-component__title-placeholder">{}</div>
                            <div className="modal-component__title">{title}</div>
                            <div className="modal-component__title-placeholder">
                                {handleClickClose &&
                                    <button className="modal-component__close-button" onClick={onClickClose}>
                                        <CloseIcon />
                                    </button>
                                }
                            </div>
                        </div>

                        <div ref={ref} className="modal-component__body-container">
                            <div className="modal-component__body-inner-container">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>,
            rootElem)}
        </>
    )
}