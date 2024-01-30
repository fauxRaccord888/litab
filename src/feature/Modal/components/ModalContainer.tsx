import type { MouseEventHandler, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "$lib/components/icons/CloseIcon";
import './style/modalContainer.scss'

interface IModalProps extends PropsWithChildren {
    title: string
    handleClickClose: () => void
}

export default function ModalContainer(props: IModalProps) {
    const { title, children, handleClickClose } = props
    const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation()

    return (
        createPortal(
            <div className="modal-outer-container" onClick={handleClickClose}>
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
            document.body
        )
    )
}