import type { MouseEventHandler, PropsWithChildren } from "react";
import './style/button.scss'

interface ButtonProps extends PropsWithChildren {
    onClick?: MouseEventHandler<HTMLButtonElement>
    primary?: boolean,
    success?: boolean,
    info?: boolean,
    danger?: boolean,
    icon?: boolean
    disabled?: boolean
    className?: string
}

export default function Button(props: ButtonProps) {
    const { children, primary, danger, success, info, icon, disabled, className, ...restProps } = props
    return (
        <button 
            className={[
                className ? className : "",
                'button-component',
                (primary ? 'button-component__primary' : ''),
                (danger ? 'button-component__danger' : ''),
                (success ? 'button-component__success' : ''),
                (info ? 'button-component__info' : ''),
                (icon ? 'button-component__icon' : ''),
            ].join(' ')} 
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    )
}