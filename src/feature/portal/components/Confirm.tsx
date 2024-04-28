import type { MouseEvent, PropsWithChildren } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import './style/confirm.scss'

interface ConfirmProps extends PropsWithChildren {
    handleClickAffirmative?: (input: string) => void
    handleClickNegative?: () => void
    destructive?: boolean,
    withInput?: boolean
}

export default function Confirm(props: ConfirmProps) {
    const { children, handleClickAffirmative, handleClickNegative, destructive, withInput } = props
    const { t } = useTranslation()
    const [input, setInput] = useState("")
    const rootElem = document.getElementById('portal-root')

    const onClickAffirmative = (e: MouseEvent) => {
        e.stopPropagation()
        if (handleClickAffirmative) handleClickAffirmative(input)
    }

    const onClickNegative = (e: MouseEvent) => {
        e.stopPropagation()
        if (handleClickNegative) handleClickNegative()
    }

    return (
        <>
            {rootElem && createPortal(
                <div className="confirm-component">
                    <div className="confirm-component__main-container" onClick={(e) => e.stopPropagation()} >
                        <div className="confirm-component__body-container">
                            <div className="confirm-component__body-inner-container">
                                {children}
                            </div>
                        </div>

                        {withInput &&
                            <div className="confirm-component__input-container">
                                <input 
                                    value={input} 
                                    onChange={(e) => setInput(e.currentTarget.value)}
                                    className="confirm-component__input"
                                />
                            </div>   
                        }

                        <div className="confirm-component__button-container">
                            <button 
                                className={[
                                    "confirm-component__button",
                                    destructive ? "confirm-component__button--destructive" : ""
                                ].join(" ")}
                                onClick={onClickAffirmative}
                            >
                                {t('portal.confirm.button.affirmative')}
                            </button>
                            <button className="confirm-component__button" onClick={onClickNegative}>
                                {t('portal.confirm.button.negative')}
                            </button>
                        </div>
                    </div>
                </div>,
            rootElem)}
        </>
    )
}